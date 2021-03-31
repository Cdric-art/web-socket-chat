type Users = Array<{id: string, name: string, room: string}>

const users: Users = [];

export class UserController {

    static addUser({ id, name, room}: {id: string, name: string, room: string}) {
        name = name.trim().toLowerCase()
        room = room.trim().toLowerCase()

        const existingUser = users.find(user => user.room === room && user.name === name)

        if (existingUser) {
            return { error: 'Username exist'}
        }

        const user = { id, name, room}
        users.push(user)
        return { user }
    }

    static removeUser({ id }: {id: string}) {
        const index = users.findIndex(user => user.id === id)

        if (index !== -1) {
            return users.splice(index, 1)[0]
        }
    }

    static getUser({ id }: {id: string}) {
        const user = users.find(user => user.id === id)
        return { user }
    }

    static getUsersInRoom({ room }: {room: string}) {
        return users.filter(user => user.room === room)
    }
}


