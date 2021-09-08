import { Request, Response, } from 'express'
import { DB } from '../../utility/db'

class WebController {

    getProfile = async (req: Request, res: Response) => {
        let data = await DB.getProfile()
        return res.status(200).json(data)
    }

    getResume = async (req: Request, res: Response) => {
        let data = await DB.getResume()
        return res.status(200).json(data)
    }

    getProject = async (req: Request, res: Response) => {
        let data = await DB.getProject()
        return res.status(200).json(data)
    }

    getBlog = async (req: Request, res: Response) => {
        let data = await DB.getPost()
        return res.status(200).json(data)
    }

    getPost = async (req: Request, res: Response) => {

        // return res.status(200).json(post.data)
    }

    getOtherPost = async (req: Request, res: Response) => {
        // return res.status(200).json(post.data)
    }
}

export default new WebController