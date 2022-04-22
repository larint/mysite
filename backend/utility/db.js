"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const resume_json_1 = __importDefault(require("../db/resume.json"));
const project_json_1 = __importDefault(require("../db/project.json"));
const skill_json_1 = __importDefault(require("../db/skill.json"));
const helper_1 = require("./helper");
const git_api_1 = require("../services/git_api");
const uuid_1 = require("uuid");
class DB {
}
exports.DB = DB;
_a = DB;
DB.saveProfile = async (profileData) => {
    let contentEncode = Buffer.from(JSON.stringify(profileData)).toString('base64');
    let api = new git_api_1.GitAPI();
    return await api.createFile(`backend/db/profile.json`, { message: 'create profile', content: contentEncode });
};
DB.getProfile = async () => {
    let api = new git_api_1.GitAPI();
    let d = await api.getFile(`backend/db/profile.json`);
    if (d.content) {
        let data = JSON.parse(Buffer.from(d.content, 'base64').toString('utf-8'));
        data.sha = d.sha;
        return data;
    }
    return {};
};
DB.updateProfile = async (profileData, sha) => {
    let contentEncode = Buffer.from(JSON.stringify(profileData)).toString('base64');
    let api = new git_api_1.GitAPI();
    return await api.updateFile(`backend/db/profile.json`, { message: 'update profile', content: contentEncode, sha: sha });
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
DB.getStatisticPost = async () => {
    let api = new git_api_1.GitAPI();
    let list = await api.getFile(`backend/db/blog`);
    return new Promise(async (res, rej) => {
        var e_1, _b;
        let stats = {
            total: list.length,
            month: {}
        };
        let now = new Date, mon = {}, total = 0, currentYear = now.getFullYear();
        for (let m = 1; m <= 12; m++) {
            mon['month_' + m] = 0;
        }
        try {
            for (var list_1 = __asyncValues(list), list_1_1; list_1_1 = await list_1.next(), !list_1_1.done;) {
                const file = list_1_1.value;
                try {
                    if (file.name.includes('.json')) {
                        let d = await api.getFile(file.path);
                        let data = JSON.parse(Buffer.from(d.content, 'base64').toString('utf-8'));
                        let month = (new Date(data.createAt)).getMonth() + 1;
                        let year = (new Date(data.createAt)).getFullYear();
                        if (currentYear == year) {
                            mon['month_' + month] += 1;
                        }
                        total++;
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_b = list_1.return)) await _b.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        stats.total = total;
        stats.month = mon;
        res(stats);
    });
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
    let slug = (0, helper_1.string_to_slug)(title);
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
    let fileName = (0, uuid_1.v4)();
    let slug = (0, helper_1.string_to_slug)(title);
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
                if (file.name.includes('.json')) {
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
            }
            catch (error) {
                console.log(error);
            }
        }
        res(posts);
    });
};
