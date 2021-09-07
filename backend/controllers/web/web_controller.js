"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../utility/db");
const profile_json_1 = __importDefault(require("../../db/profile.json"));
const resume_json_1 = __importDefault(require("../../db/resume.json"));
const project_json_1 = __importDefault(require("../../db/project.json"));
class WebController {
    constructor() {
        this.getProfile = async (req, res) => {
            return res.status(200).send(profile_json_1.default);
        };
        this.getResume = async (req, res) => {
            return res.status(200).json(resume_json_1.default);
        };
        this.getProject = async (req, res) => {
            return res.status(200).json(project_json_1.default);
        };
        this.getBlog = async (req, res) => {
            let post = await db_1.DB.select('post');
            let data = post.data.map((el) => el.data);
            return res.status(200).json(data);
        };
        this.getPost = async (req, res) => {
            let post = await db_1.DB.selectPost(req.body.slug);
            return res.status(200).json(post.data);
        };
        this.getOtherPost = async (req, res) => {
            let post = await db_1.DB.selectPost(req.body.slug);
            return res.status(200).json(post.data);
        };
    }
}
exports.default = new WebController;
