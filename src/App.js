import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MultiMedia from './pages/Multimedia.js';
import Members from './pages/Members.js';
import { Switch, Route } from 'react-router-dom'
// A base file for all your pages to come together.

const Main = () => (

    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/members' component={Members}/>
        <Route path='/media' component={MultiMedia}/>
    </Switch>

);

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Main/>
            </div>
        );
    }
}

export default App;
