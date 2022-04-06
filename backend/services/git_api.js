"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitAPI = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const git_config_1 = require("../config/git.config");
class GitAPI {
    constructor() {
        this.getFile = async (path) => {
            try {
                let response2 = await node_fetch_1.default(`https://api.github.com/repos/${git_config_1.GIT.o}/${git_config_1.GIT.r}/contents/${path}`, {
                    method: 'get'
                });
                let data2 = await response2.json();
                let response1 = await node_fetch_1.default(data2.download_url, {
                    method: 'get'
                });
                let data1 = await response1.json();
                let post = {
                    post: data1,
                    sha: data2.sha
                };
                return post;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        };
        this.createFile = async (path, data) => {
            try {
                let response = await node_fetch_1.default(`https://api.github.com/repos/${git_config_1.GIT.o}/${git_config_1.GIT.r}/contents/${path}`, {
                    method: 'put',
                    headers: {
                        'Content-Type': 'text/plain',
                        'Authorization': `Bearer ${git_config_1.GIT.t}`
                    },
                    body: JSON.stringify(data),
                });
                return await response.json();
            }
            catch (err) {
                console.log(err);
                return false;
            }
        };
        this.updateFile = async (path, data) => {
            try {
                let response = await node_fetch_1.default(`https://api.github.com/repos/${git_config_1.GIT.o}/${git_config_1.GIT.r}/contents/${path}`, {
                    method: 'put',
                    headers: {
                        'Content-Type': 'text/plain',
                        'Authorization': `Bearer ${git_config_1.GIT.t}`
                    },
                    body: JSON.stringify(data),
                });
                return await response.json();
            }
            catch (err) {
                console.log(err);
                return false;
            }
        };
        this.deleteFile = async (path, data) => {
            try {
                let response = await node_fetch_1.default(`https://api.github.com/repos/${git_config_1.GIT.o}/${git_config_1.GIT.r}/contents/${path}`, {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'text/plain',
                        'Authorization': `Bearer ${git_config_1.GIT.t}`
                    },
                    body: JSON.stringify(data),
                }).then((jsonResponse) => {
                    console.log('jsonResponse', jsonResponse);
                }).catch((err) => {
                    console.error('err', err);
                });
                return true;
            }
            catch (err) {
                console.log('err ', err);
                return false;
            }
        };
    }
}
exports.GitAPI = GitAPI;
