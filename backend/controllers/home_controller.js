"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    constructor() {
        this.index = async (req, res) => {
            return res.json({ msg: 'react' });
        };
    }
}
exports.default = new HomeController;
