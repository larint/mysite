import * as mysql from 'mysql'
require('dotenv').config()

export interface Params {
    table: string,
    where: (string | number | boolean | Date)[],
    set?: string,
    select?: string,
    limit?: string,
    order?: string | 'id desc'
}

export interface ColumnData {
    field?: string | number,
    data?: any | any[]
}

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string) || 3316,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_DB,
    timezone: process.env.DB_TIMEZONE,
    multipleStatements: true
})

// reconnect if lost connect database, using on heroku
let connectDatabase = () => {

    connection.on('error', function (err) {
        if (!err.fatal) {
            return
        }
        if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
            // log(err)
            console.log(err);

        }

        connection = mysql.createConnection(connection.config);
        connectDatabase();
    });

}

connectDatabase()

class DB {
    static escape = (str: string): string => {
        return connection.escape(str)
    }
    static beginTransaction = async () => {
        connection.query("START TRANSACTION");
    }

    static endTransaction = async () => {
        connection.query("COMMIT");
    }

    static rollback = async () => {
        connection.query("ROLLBACK");
    }

    static truncate = async (table: string) => {
        connection.query(`SET FOREIGN_KEY_CHECKS = 0; TRUNCATE TABLE ${table}; SET FOREIGN_KEY_CHECKS = 1;`);
    }

    static exeQuery = (sql: string, selectPlainObj: boolean = false): Promise<any> => {
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, result, fields) => {
                if (err) {
                    console.log(err);

                    // log(err, sql)
                    resolve([])
                } else {
                    let data: any[] = selectPlainObj ? JSON.parse(JSON.stringify(result)) : result
                    if (data.length == 0) {
                        return resolve(false)
                    }
                    resolve(data)
                }
            })
        })
    }

    static selectBySql = async (sql: string, selectPlainObj: boolean = false): Promise<any[] | mysql.MysqlError | any> => await DB.exeQuery(sql, selectPlainObj)
    static selectByParams = async (params: Params, selectPlainObj: boolean = false): Promise<any[] | mysql.MysqlError | any> => {
        let limit: string | number = '', order: string = ''
        if (params.limit) {
            limit = `LIMIT ${params.limit}`
        }
        if (params.order) {
            order = `ORDER BY ${params.order}`
        }
        return await DB.exeQuery(mysql.format(`SELECT ${params.select} FROM ${params.table} WHERE ${params.set} ${order} ${limit}`, params.where), selectPlainObj)
    }
    static insertItem = async (params: Params): Promise<any[] | mysql.MysqlError | any> => await DB.exeQuery(mysql.format(`INSERT INTO ${params.table} SET ${params.set}`, params.where))
    static updateItem = async (params: Params): Promise<any[] | mysql.MysqlError | any> => await DB.exeQuery(mysql.format(`UPDATE ${params.table} SET ${params.set} WHERE ?? = ?`, params.where))
    static deleteItem = async (params: Params): Promise<any[] | mysql.MysqlError | any> => await DB.exeQuery(mysql.format(`DELETE FROM ${params.table} WHERE ${params.set}`, params.where))

}

export { DB }