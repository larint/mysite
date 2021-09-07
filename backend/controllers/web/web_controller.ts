import { Request, Response, } from 'express'
import { DB } from '../../utility/db'
import { default as profile } from '../../db/profile.json'
import { default as resume } from '../../db/resume.json'
import { default as project } from '../../db/project.json'

class WebController {

    getProfile = async (req: Request, res: Response) => {
        return res.status(200).send(profile)
    }

    getResume = async (req: Request, res: Response) => {
        return res.status(200).json(resume)
    }

    getProject = async (req: Request, res: Response) => {
        return res.status(200).json(project)
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