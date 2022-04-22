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
                let response = await (0, node_fetch_1.default)(`https://api.github.com/repos/${git_config_1.GIT.owner}/${git_config_1.GIT.repo}/contents/${path}`, {
                    method: 'get',
                    headers: {
                        'Content-Type': 'text/plain',
                        'Authorization': `Bearer ${git_config_1.GIT.token}`
                    }
                });
                return await response.json();
            }
            catch (err) {
                console.log(err);
                return false;
            }
        };
        this.createFile = async (path, data) => {
            try {
                let response = await (0, node_fetch_1.default)(`https://api.github.com/repos/${git_config_1.GIT.owner}/${git_config_1.GIT.repo}/contents/${path}`, {
                    method: 'put',
                    headers: {
                        'Content-Type': 'text/plain',
                        'Authorization': `Bearer ${git_config_1.GIT.token}`
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
                let response = await (0, node_fetch_1.default)(`https://api.github.com/repos/${git_config_1.GIT.owner}/${git_config_1.GIT.repo}/contents/${path}`, {
                    method: 'put',
                    headers: {
                        'Content-Type': 'text/plain',
                        'Authorization': `Bearer ${git_config_1.GIT.token}`
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
                let response = await (0, node_fetch_1.default)(`https://api.github.com/repos/${git_config_1.GIT.owner}/${git_config_1.GIT.repo}/contents/${path}`, {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'text/plain',
                        'Authorization': `Bearer ${git_config_1.GIT.token}`
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
    }
}
exports.GitAPI = GitAPI;
