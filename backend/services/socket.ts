import { Server } from "socket.io"

class Socket {
    io: any
    constructor(server: any) {
        this.io = new Server(server, {});
        this.io.on('connection', (socket: any) => {

        })
    }

    emiter(event: string, body: any) {
        if (body) {
            this.io.emit(event, body)
        }
    }
}

export { Socket }