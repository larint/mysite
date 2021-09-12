import nodemailer from 'nodemailer'
import { SendMailOptions, Transporter } from 'nodemailer'

class Mailer {
    transporter: Transporter

    constructor() {

        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT as any,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        })
    }

    send = async (mailOptions: SendMailOptions) => {
        try {
            return new Promise((resolve, reject) => {
                this.transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error)
                        resolve(false)
                    } else {
                        resolve(true)
                    }
                });
            })
        } catch (error) {
            console.log(error)
        }

        return false
    }

}

export { Mailer }