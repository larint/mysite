"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mailer = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class Mailer {
    constructor() {
        this.send = async (mailOptions) => {
            try {
                return new Promise((resolve, reject) => {
                    this.transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                            resolve(false);
                        }
                        else {
                            resolve(true);
                        }
                    });
                });
            }
            catch (error) {
                console.log(error);
            }
            return false;
        };
        this.transporter = nodemailer_1.default.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });
    }
}
exports.Mailer = Mailer;
