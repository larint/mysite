import { Request, Response, } from 'express'
import fs from 'fs'
import path from 'path'
import { GitAPI } from '../../services/git_api'
import { DB } from '../../utility/db'
import { string_to_slug } from '../../utility/helper'

class HomeController {

    index = async (req: Request, res: Response) => {

        return res.json({ msg: 'react' })
    }

    log = async (req: Request, res: Response) => {
        fs.readFile(path.join(path.dirname(__dirname), 'log/app.log'), 'utf8', (err, data) => {
            return res.json({ msg: data })
        })
    }

    savePost = async (req: Request, res: Response) => {
        let post = await DB.savePost(req.body.title, req.body.content)
        if (post) {
            return res.status(200).json({
                message: 'create post success'
            })
        }

        return res.status(201).json({
            message: 'create post failed'
        })
    }

    updatePost = async (req: Request, res: Response) => {
        let post = await DB.updatePost(req.body.title, req.body.content, req.body.sha, req.body.id)
        if (post) {
            return res.status(200).json({
                message: 'update post success'
            })
        }

        return res.status(201).json({
            message: 'update post failed'
        })
    }


    getListPost = async (req: Request, res: Response) => {
        await DB.getListPost((posts) => {
            return res.status(200).json(posts)
        })
    }

    getPost = async (req: Request, res: Response) => {
        let id = req.body.id

        let post = await DB.getPost(id)

        return res.status(200).json(post)
    }

}

export default new HomeController