import React from 'react';

// @ts-ignore
import ReactEmoji from 'react-emoji';

interface PropsMessages {
    messages: object[],
    name: string,
}

export function Messages({messages, name}: PropsMessages): JSX.Element {
    return (
        <div className="messages">
            {
                messages.map((message, i) => (
                    <div key={i}>
                        <Message name={name} message={message} />
                    </div>
                ))
            }
        </div>
    );
}

interface PropsMessage {
    message: object,
    name: string,
}

function Message({ message, name }: PropsMessage): JSX.Element {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    // @ts-ignore
    if(message.user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimmedName}</p>
                    <div className="messageBox backgroundBlue">
                        {/*// @ts-ignore*/}
                        <p className="messageText colorWhite">{ReactEmoji.emojify(message.text)}</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        {/*// @ts-ignore*/}
                        <p className="messageText colorDark">{ReactEmoji.emojify(message.text)}</p>
                    </div>
                    {/*// @ts-ignore*/}
                    <p className="sentText pl-10 ">{message.user}</p>
                </div>
            )
    );
}
