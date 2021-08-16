import { Request, Response, } from 'express'
import fs from 'fs'
import path from 'path'

class HomeController {

    index = async (req: Request, res: Response) => {

        return res.json({ msg: 'react' })
    }

    log = async (req: Request, res: Response) => {
        fs.readFile(path.join(path.dirname(__dirname), 'log/app.log'), 'utf8', (err, data) => {
            return res.json({ msg: data })
        })
    }

}

export default new HomeController