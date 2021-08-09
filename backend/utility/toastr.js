"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToaStr = void 0;
class ToaStr {
}
exports.ToaStr = ToaStr;
ToaStr.set = (req, message, live = false) => {
    if (live) {
        req.app.get("socketService").emiter('message', message);
    }
    else {
        req.session.message = message;
    }
};
