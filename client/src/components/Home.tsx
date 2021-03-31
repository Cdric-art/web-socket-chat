import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    name: (e: React.SetStateAction<string>) => void,
    room: (e: React.SetStateAction<string>) => void
}

export function Home({ name, room }: Props): JSX.Element {
    return (
        <div className="App">
            <div className="container-login">
                <input type="text" name="user" onChange={(e) => name(e.target.value)}/>
                <input type="text" name="room" onChange={(e) => room(e.target.value)}/>
                <Link to='/chat'>Sign In</Link>
            </div>
        </div>
    );
}
