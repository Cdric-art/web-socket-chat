import React, {useCallback, useEffect, useState} from 'react';
import {io, Socket} from "socket.io-client";

interface Props {
    name: React.ComponentState,
    room: React.ComponentState,
}

export function Chat({name, room}: Props): JSX.Element {

    const [messages, setMessages] = useState<Array<object>>([])
    const [message, setMessage] = useState<string>('')

    const socket = io("http://localhost:5000")

    const useSocket = useCallback(() => {
        socket.on("connect", () => {
            console.log("Socket : ", socket.id)

            socket.emit('join', ({id: name, name: name, room: room}), (res: Socket) => {
                console.log(res)
            })
        })

        socket.on('message', (response) => {
            setMessages([...messages, response])
        })

        return () => {
            socket.disconnect()
            socket.off()
        }
    }, [socket, messages])

    useEffect(() => {
        useSocket()
    }, [])

    const sendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (message) {
            socket.emit('sendMessage', {name ,message}, (response: any) => {
                setMessage('')
                console.log(response)
            })
        }
    }

    return (
        <div className="App">
            <div className="container-chat">
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                />
            </div>
        </div>
    );
}

