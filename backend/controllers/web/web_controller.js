"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mailer_1 = require("../../services/Mailer");
const db_1 = require("../../utility/db");
const helper_1 = require("../../utility/helper");
class WebController {
    constructor() {
        this.getProfile = async (req, res) => {
            let data = await db_1.DB.getProfile();
            return res.status(200).json(data);
        };
        this.getResume = async (req, res) => {
            let data = await db_1.DB.getResume();
            return res.status(200).json(data);
        };
        this.getProject = async (req, res) => {
            let data = await db_1.DB.getProject();
            return res.status(200).json(data);
        };
        this.getBlog = async (req, res) => {
            let data = await db_1.DB.getPost();
            return res.status(200).json(data);
        };
        this.getPost = async (req, res) => {
        };
        this.getOtherPost = async (req, res) => {
        };
        this.getSkill = async (req, res) => {
            let data = await db_1.DB.getSkill();
            return res.status(200).json(data);
        };
        this.sendContact = async (req, res) => {
            var _a;
            let captcha = (_a = req.session) === null || _a === void 0 ? void 0 : _a.captcha;
            if (captcha != req.body.captcha) {
                return res.status(201).json({
                    msg: 'Captcha wrong!'
                });
            }
            let content = req.body.content.substring(0, 1000), email = req.body.email, name = req.body.name;
            let mailer = new Mailer_1.Mailer;
            let config = {
                from: `Recv - Dung Bui <${email}>`,
                bcc: `${process.env.MAIL_RECEIVER}`,
                subject: 'Email from Recv - Dung Bui',
                text: `Name: ${name}\n\n${content}`
            };
            await mailer.send(config);
            return res.status(200).json({
                msg: 'send mail done'
            });
        };
        this.getCaptcha = async (req, res) => {
            let code = helper_1.makeid();
            req.session.captcha = code;
            return res.status(200).json({
                code: code
            });
        };
    }
}
exports.default = new WebController;
