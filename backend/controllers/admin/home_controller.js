"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const db_1 = require("../../utility/db");
const formidable_1 = __importDefault(require("formidable"));
class HomeController {
    constructor() {
        this.index = async (req, res) => {
            return res.json({ msg: 'react' });
        };
        this.log = async (req, res) => {
            fs_1.default.readFile(path_1.default.join(path_1.default.dirname(__dirname), 'log/app.log'), 'utf8', (err, data) => {
                return res.json({ msg: data });
            });
        };
        this.savePost = async (req, res) => {
            let post = await db_1.DB.savePost(req.body.title, req.body.content);
            if (post) {
                return res.status(200).json({
                    message: 'create post success'
                });
            }
            return res.status(201).json({
                message: 'create post failed'
            });
        };
        this.updatePost = async (req, res) => {
            let post = await db_1.DB.updatePost(req.body.title, req.body.content, req.body.sha, req.body.id);
            if (post) {
                return res.status(200).json({
                    message: 'update post success'
                });
            }
            return res.status(201).json({
                message: 'update post failed'
            });
        };
        this.deletePost = async (req, res) => {
            let post = await db_1.DB.deletePost(req.body.id, req.body.sha);
            if (post) {
                return res.status(200).json({
                    message: 'delete post success'
                });
            }
            return res.status(201).json({
                message: 'delete post failed'
            });
        };
        this.getListPost = async (req, res) => {
            let posts = await db_1.DB.getListPost();
            return res.status(200).json(posts);
        };
        this.getPost = async (req, res) => {
            let id = req.body.id;
            let post = await db_1.DB.getPost(id);
            return res.status(200).json(post);
        };
        this.getStatisticPost = async (req, res) => {
            let stats = await db_1.DB.getStatisticPost();
            return res.status(200).json(stats);
        };
        this.getProfile = async (req, res) => {
            let profile = await db_1.DB.getProfile();
            return res.status(200).json(profile);
        };
        this.saveProfile = async (req, res) => {
            const form = (0, formidable_1.default)({
                multiples: true
            });
            form.parse(req, async (err, fields, files) => {
                if (err) {
                    console.log(err);
                    return;
                }
                let profileData = {
                    name: fields.displayName,
                    job: fields.position,
                    birthDay: fields.birthday,
                    contact: {
                        skype: fields.skype ? fields.skype : '',
                        phone: fields.phone ? fields.phone : '',
                        email: fields.email ? fields.email : '',
                        address: fields.address ? fields.address : '',
                    },
                    password: "",
                    social: {
                        fb: fields.fb ? fields.fb : '',
                        github: fields.github ? fields.github : '',
                        insta: fields.insta ? fields.insta : '',
                    },
                    intro: fields.intro,
                    avatar: '',
                };
                let sha = fields.sha;
                let file = files.avatar;
                if (sha) {
                    if (file) {
                        fs_1.default.readFile(file.filepath, async (err, data) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            let base64data = Buffer.from(data).toString('base64');
                            profileData.avatar = base64data;
                            let profile = await db_1.DB.updateProfile(profileData, sha);
                            return res.status(200).json(profile);
                        });
                    }
                    else {
                        let data = await db_1.DB.getProfile();
                        profileData.avatar = data.avatar;
                        let profile = await db_1.DB.updateProfile(profileData, sha);
                        return res.status(200).json(profile);
                    }
                }
                else {
                    fs_1.default.readFile(file.filepath, async (err, data) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        let base64data = Buffer.from(data).toString('base64');
                        profileData.avatar = base64data;
                        let profile = await db_1.DB.saveProfile(profileData);
                        return res.status(200).json(profile);
                    });
                }
            });
        };
        this.checkAuth = async (req, res) => {
            var _a;
            if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.user) {
                return res.status(200).json({
                    message: 'login success',
                    user: req.session.user
                });
            }
            return res.status(201).json({
                message: 'login failed',
                user: null
            });
        };
        this.doLogin = async (req, res) => {
            let username = req.body.username;
            let remember = req.body.remember;
            let password = Buffer.from(req.body.password).toString('base64');
            if (username == process.env.USER_ADMIN && password == process.env.PASS_ADMIN) {
                req.session.user = username;
                return res.status(200).json({
                    message: 'login success',
                    username: username
                });
            }
            return res.status(201).json({
                message: 'login failed'
            });
        };
        this.doLogout = async (req, res) => {
            var _a, _b;
            if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.user) {
                (_b = req.session) === null || _b === void 0 ? void 0 : _b.destroy(() => { });
                return res.status(200).json({
                    message: 'logout success'
                });
            }
            return res.status(201).json({
                message: 'logout failed'
            });
        };
    }
}
exports.default = new HomeController;
