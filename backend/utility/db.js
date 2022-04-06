"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const profile_json_1 = __importDefault(require("../db/profile.json"));
const resume_json_1 = __importDefault(require("../db/resume.json"));
const project_json_1 = __importDefault(require("../db/project.json"));
const skill_json_1 = __importDefault(require("../db/skill.json"));
const helper_1 = require("./helper");
const git_api_1 = require("../services/git_api");
const glob_1 = require("glob");
const constant_1 = require("../config/constant");
const fs_1 = __importDefault(require("fs"));
const uuid_1 = require("uuid");
class DB {
}
exports.DB = DB;
DB.getProfile = async () => {
    return profile_json_1.default;
};
DB.getResume = async () => {
    return resume_json_1.default;
};
DB.getProject = async () => {
    return project_json_1.default;
};
DB.getSkill = async () => {
    return skill_json_1.default;
};
DB.getPost = async (id) => {
    let api = new git_api_1.GitAPI();
    let post = await api.getFile(`backend/db/blog/${id}.json`);
    return post;
};
DB.updatePost = async (title, content, sha, id) => {
    if (!content) {
        return false;
    }
    let slug = helper_1.string_to_slug(title);
    let post = {
        title: title,
        slug: slug,
        content: content,
        createAt: Date.now(),
        id: id
    };
    let contentEncode = Buffer.from(JSON.stringify(post)).toString('base64');
    let api = new git_api_1.GitAPI();
    return await api.updateFile(`backend/db/blog/${id}.json`, { message: 'update post', content: contentEncode, sha: sha });
};
DB.savePost = async (title, content) => {
    if (!content) {
        return false;
    }
    let fileName = uuid_1.v4();
    let slug = helper_1.string_to_slug(title);
    let post = {
        title: title,
        slug: slug,
        content: content,
        createAt: Date.now(),
        id: fileName
    };
    let contentEncode = Buffer.from(JSON.stringify(post)).toString('base64');
    let api = new git_api_1.GitAPI();
    return await api.createFile(`backend/db/blog/${fileName}.json`, { message: 'create post', content: contentEncode });
};
DB.getListPost = async (callback) => {
    glob_1.glob(`${constant_1.appRoot}/backend/db/blog/*.json`, {}, function (er, files) {
        let posts = [];
        for (const f of files) {
            let data = fs_1.default.readFileSync(f, { encoding: 'utf8', flag: 'r' });
            data = JSON.parse(data);
            data.content = '';
            posts.push(data);
        }
        callback(posts);
    });
};
