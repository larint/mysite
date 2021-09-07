"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../utility/db");
class WebController {
    constructor() {
        this.getProfile = async (req, res) => {
            return res.status(200).send(db_1.DB.getProfile());
        };
        this.getResume = async (req, res) => {
            return res.status(200).json(db_1.DB.getResume());
        };
        this.getProject = async (req, res) => {
            return res.status(200).json(db_1.DB.getProject());
        };
        this.getBlog = async (req, res) => {
            return res.status(200).json(db_1.DB.getPost());
        };
        this.getPost = async (req, res) => {
        };
        this.getOtherPost = async (req, res) => {
        };
    }
}
exports.default = new WebController;
