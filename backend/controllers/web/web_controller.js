"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WebController {
    constructor() {
        this.getProfile = async (req, res) => {
            return res.json({
                "id": 1,
                "name": "Quang Dung",
                "birthDay": "1991",
                "phone": "0394-06-89-60",
                "email": "qdspkit@gmail.com",
                "work": "web developer",
                "address": "Linh Tay Ward, Thu Duc City, Ho Chi Minh City",
                "socialLink1": null,
                "socialLink2": null,
                "socialLink3": null
            });
        };
    }
}
exports.default = new WebController;
