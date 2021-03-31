import React from "react";

interface Props {
    setMessage: (e: React.SetStateAction<string>) => void,
    sendMessage: (e: React.KeyboardEvent<HTMLInputElement>|React.MouseEvent<HTMLButtonElement>) => void,
    message: string
}

export function Input({ setMessage, sendMessage, message }: Props) {
    return <form className="form">
        <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
        />
        <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
    </form>

}
