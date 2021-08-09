"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
const socket_io_1 = require("socket.io");
class Socket {
    constructor(server) {
        this.io = new socket_io_1.Server(server, {});
        this.io.on('connection', (socket) => {
        });
    }
    emiter(event, body) {
        if (body) {
            this.io.emit(event, body);
        }
    }
}
exports.Socket = Socket;
