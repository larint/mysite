"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../utility/db");
class WebController {
    constructor() {
        this.getProfile = async (req, res) => {
            var _a;
            let users = await db_1.DB.select('users');
            return res.json((_a = users.data[0]) === null || _a === void 0 ? void 0 : _a.data);
        };
    }
}
exports.default = new WebController;
