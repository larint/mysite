import { Request, Response, } from 'express'
import { DB } from '../../utility/db'

class WebController {

    getProfile = async (req: Request, res: Response) => {
        return res.status(200).send(DB.getProfile())
    }

    getResume = async (req: Request, res: Response) => {
        return res.status(200).json(DB.getResume())
    }

    getProject = async (req: Request, res: Response) => {
        return res.status(200).json(DB.getProject())
    }

    getBlog = async (req: Request, res: Response) => {
        return res.status(200).json(DB.getPost())
    }

    getPost = async (req: Request, res: Response) => {

        // return res.status(200).json(post.data)
    }

    getOtherPost = async (req: Request, res: Response) => {
        // return res.status(200).json(post.data)
    }
}

export default new WebController