"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
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
    }
}
exports.default = new HomeController;
