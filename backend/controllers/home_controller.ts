import { Request, Response, } from 'express'

class HomeController {

    index = async (req: Request, res: Response) => {

        return res.json({ msg: 'react' })
    }

}

export default new HomeController