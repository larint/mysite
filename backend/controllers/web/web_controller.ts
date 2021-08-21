import { Request, Response, } from 'express'
import { DB } from '../../utility/db'

class WebController {

    getProfile = async (req: Request, res: Response) => {
        let users: any = await DB.select('users')
        return res.json(users.data[0]?.data)
    }

}

export default new WebController