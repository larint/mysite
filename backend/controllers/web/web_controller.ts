import { Request, Response, } from 'express'
import { DB } from '../../utility/db'

class WebController {

    getProfile = async (req: Request, res: Response) => {
        // let profile = await DB.selectBySql('SELECT * FROM profiles')
        // profile = profile.length > 0 ? profile[0] : {}
        return res.json({
            "id": 1,
            "name": "Quang Dung",
            "birthDay": "1991",
            "phone": "0394-06-89-60",
            "email": "qdspkit@gmail.com",
            "work": "web developer",
            "address": "Linh Tay Ward, Thu Duc City, Ho Chi Minh City",
            "socialLink1": null,
            "socialLink2": null,
            "socialLink3": null
        })
    }

}

export default new WebController