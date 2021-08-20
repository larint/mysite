import { Request, Response, } from 'express'
import { DB } from '../../utility/db'

class WebController {

    getProfile = async (req: Request, res: Response) => {
        let profile = await DB.selectBySql('SELECT * FROM profiles')
        profile = profile.length > 0 ? profile[0] : {}
        return res.json(profile)
    }

}

export default new WebController