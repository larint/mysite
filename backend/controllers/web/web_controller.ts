import { Request, Response, } from 'express'
import { SendMailOptions } from 'nodemailer'
import { Mailer } from '../../services/Mailer'
import { DB } from '../../utility/db'
import { makeid } from '../../utility/helper'

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
        let posts = await DB.getListPost()
        return res.status(200).json(posts)
    }

    getPost = async (req: Request, res: Response) => {
        let id = req.body.id

        let post = await DB.getPost(id)

        return res.status(200).json(post)
    }

    getOtherPost = async (req: Request, res: Response) => {
        // return res.status(200).json(post.data)
    }

    getSkill = async (req: Request, res: Response) => {
        let data = await DB.getSkill()
        return res.status(200).json(data)
    }

    sendContact = async (req: Request, res: Response) => {
        let captcha = req.session?.captcha

        if (captcha != req.body.captcha) {
            return res.status(201).json({
                msg: 'Captcha wrong!'
            })
        }

        let content = (req.body.content as string).substring(0, 1000),
            email = req.body.email,
            name = req.body.name

        let mailer = new Mailer

        let config: SendMailOptions = {
            from: `Recv - Dung Bui <${email}>`,
            bcc: `${process.env.MAIL_RECEIVER}`,
            subject: 'Email from Recv - Dung Bui',
            text: `Name: ${name}\n\n${content}`
        }

        await mailer.send(config)

        return res.status(200).json({
            msg: 'send mail done'
        })
    }

    getCaptcha = async (req: Request, res: Response) => {
        let code = makeid()
        req.session.captcha = code.toUpperCase()
        return res.status(200).json({
            code: code.toUpperCase()
        })
    }
}

export default new WebController