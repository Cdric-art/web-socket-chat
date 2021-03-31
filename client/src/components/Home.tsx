import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    name: (e: React.SetStateAction<string>) => void,
    room: (e: React.SetStateAction<string>) => void
}

export function Home({ name, room }: Props): JSX.Element {
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join room</h1>
                <div>
                    <input className="joinInput" type="text" name="user" onChange={(e) => name(e.target.value)}/>
                </div>
                <div>
                    <input className="joinInput" type="text" name="room" onChange={(e) => room(e.target.value)}/>
                </div>
                <Link to='/chat'>
                    <button className="btn">Sign In</button>
                </Link>
            </div>
        </div>
    );
}
