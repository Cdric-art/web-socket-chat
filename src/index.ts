import { createServer } from 'http'
import {Server, Socket} from 'socket.io'
import {UserController} from "./controllers/user.controller";

const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: ['http://localhost:3000'],
        allowedHeaders: '*',
        credentials: true
    }
})

io.on("connection", (socket: Socket) => {
    console.log('Socket.io is connecting, id : ', socket.id)

    socket.on("addUser", (payload, cb) => {
        const user = UserController.addUser(payload)
        cb(`New user : ${JSON.stringify(user)}`)
    })

    socket.on("disconnecting", () => {
        console.log("Disconnect")
    })
})

httpServer.listen(5000, () => {
    console.log("🚀 Server starting on port : 5000 🚀")
})

