"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const db_1 = require("../../utility/db");
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
        this.getListPost = async (req, res) => {
            await db_1.DB.getListPost((posts) => {
                return res.status(200).json(posts);
            });
        };
        this.getPost = async (req, res) => {
            let id = req.body.id;
            let post = await db_1.DB.getPost(id);
            return res.status(200).json(post);
        };
    }
}
exports.default = new HomeController;
