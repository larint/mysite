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
    let d = await api.getFile(`backend/db/blog/${id}.json`);
    let data = JSON.parse(Buffer.from(d.content, 'base64').toString('utf-8'));
    data.sha = d.sha;
    return data;
};
DB.deletePost = async (id, sha) => {
    if (!id) {
        return false;
    }
    let api = new git_api_1.GitAPI();
    return await api.deleteFile(`backend/db/blog/${id}.json`, { message: 'delete post', sha: sha });
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
DB.getListPost = async () => {
    let api = new git_api_1.GitAPI();
    let list = await api.getFile(`backend/db/blog`);
    return new Promise(async (res, rej) => {
        let posts = [];
        for (const file of list) {
            try {
                let d = await api.getFile(file.path);
                let data = JSON.parse(Buffer.from(d.content, 'base64').toString('utf-8'));
                let post = {
                    createAt: data.createAt,
                    id: data.id,
                    slug: data.slug,
                    title: data.title,
                    sha: file.sha
                };
                posts.push(post);
            }
            catch (error) {
                console.log(error);
            }
        }
        res(posts);
    });
};
