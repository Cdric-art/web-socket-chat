import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Home} from "./components/Home";
import {Chat} from "./components/Chat";

import './App.css'

export default function App() {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home name={setName} room={setRoom}/>
                    </Route>
                    <Route exact path='/chat'>
                        <Chat name={name} room={room}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

