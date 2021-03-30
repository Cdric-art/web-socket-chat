import React, {useEffect, useMemo} from 'react';
import {io, Socket} from "socket.io-client";

interface Props {
    user: React.ComponentState,
    room: React.ComponentState,
}

export function Chat({user, room}: Props): JSX.Element {

    const socket = io("http://localhost:5000")

    useEffect(() => {
        useSocket()
    }, [])

    const useSocket = useMemo(() => {
        socket.on("connect", () => {
            console.log("Socket : ", socket.id)
            const id = socket.id

            socket.emit('addUser', ({user, room, id}), (res: Socket) => {
                console.log(res)
            })
        })

        return () => {
            socket.disconnect()
            socket.off()
        }
    }, [socket])

    return (
        <div>
            <p>{user} : {room} on {socket.id}</p>
        </div>
    );
}

