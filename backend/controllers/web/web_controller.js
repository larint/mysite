"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../utility/db");
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
    }
}
exports.default = new WebController;
