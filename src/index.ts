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

    socket.on("join", (payload, cb) => {
        const {user, error} = UserController.addUser(payload)
        if (error) {
            return cb(error)
        }
        if (user) {
            socket.join(user.room)
            socket.emit('message', { user: 'Admin', text: `${user.name}, welcome to the room ${user.room}`})
            socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined !`})

            cb(`${user.name} has joined !`)
        }
    })

    socket.on('sendMessage', ({name, message}, cb) => {
        const { user } = UserController.getUser({id : name})
        if (user) {
            io.to(user.room).emit('message', { user: user.name, text: message})

            cb('Message send !')
        }
    })

    socket.on('logout', ({name}, cb) => {
        const user = UserController.removeUser({id: name})
        console.log(`Disconnect : ${user}`)
        if(user) {
            socket.broadcast.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
            cb(`Disconnect : ${user}`)
        }
    })

    socket.on("disconnecting", () => {
        console.log("Disconnect")
    })
})

httpServer.listen(5000, () => {
    console.log("🚀 Server starting on port : 5000 🚀")
})

