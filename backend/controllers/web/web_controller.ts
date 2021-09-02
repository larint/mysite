import { Request, Response, } from 'express'
import { DB } from '../../utility/db'

class WebController {

    getProfile = async (req: Request, res: Response) => {
        let users: any = await DB.select('users')
        return res.json(users.data[0]?.data)
    }

    getResume = async (req: Request, res: Response) => {
        let resume: any = await DB.select('resume')
        let data = resume.data.map((el: any) => el.data)
        return res.status(200).json(data)
    }

    getProject = async (req: Request, res: Response) => {
        let project: any = await DB.select('project')
        let data = project.data.map((el: any) => el.data)
        return res.status(200).json(data)
    }

    getBlog = async (req: Request, res: Response) => {
        let post: any = await DB.select('post')
        let data = post.data.map((el: any) => el.data)
        return res.status(200).json(data)
    }

    getPost = async (req: Request, res: Response) => {
        let post: any = await DB.selectPost(req.body.slug)
        return res.status(200).json(post.data)
    }

    getOtherPost = async (req: Request, res: Response) => {
        let post: any = await DB.selectPost(req.body.slug)
        return res.status(200).json(post.data)
    }
}

export default new WebController