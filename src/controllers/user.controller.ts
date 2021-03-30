const users: [object?] = [];

export class UserController {

    static addUser({ id, name, room}: {id: string, name: string, room: string}) {
        const user = { id, name, room}
        users.push(user)
        return user
    }

}


