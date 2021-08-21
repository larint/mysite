import faunadb from 'faunadb'
let q = faunadb.query
let client = new faunadb.Client({ secret: process.env.FAUNA_KEY as string })

class DB {

    static create = async (collectionName: string, data: Object) => {
        try {
            let result = await client.query(
                q.Create(q.Collection(collectionName), { data: data })
            )
        } catch (error) {

        }
    }

    static select = async (collectionName: string) => {
        try {
            let result = await client.query(
                q.Map(
                    q.Paginate(q.Documents(q.Collection(collectionName))),
                    q.Lambda("X", q.Get(q.Var("X")))
                )
            )

            return result
        } catch (error) {
        }
        return false
    }

}

export { DB }