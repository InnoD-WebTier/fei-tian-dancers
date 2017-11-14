import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Media from './Media';
import Members from './Members';
import { Switch, Route } from 'react-router-dom'
// A base file for all your pages to come together.

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/members' component={Members}/>
            <Route path='/media' component={Media}/>
        </Switch>
    </main>

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
