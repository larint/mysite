"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const profile_json_1 = __importDefault(require("../db/profile.json"));
const resume_json_1 = __importDefault(require("../db/resume.json"));
const project_json_1 = __importDefault(require("../db/project.json"));
const post_json_1 = __importDefault(require("../db/post.json"));
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
DB.getPost = async () => {
    return post_json_1.default;
};
