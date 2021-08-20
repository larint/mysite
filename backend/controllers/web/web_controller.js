"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../utility/db");
class WebController {
    constructor() {
        this.getProfile = async (req, res) => {
            let profile = await db_1.DB.selectBySql('SELECT * FROM profiles');
            profile = profile.length > 0 ? profile[0] : {};
            return res.json(profile);
        };
    }
}
exports.default = new WebController;
