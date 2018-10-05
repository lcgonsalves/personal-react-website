import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import '../css/App.css';
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio'

class App extends Component {

    render() {
        return (
            <Router>
                <div className="app">
                    <Navbar/>
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/portfolio" component={Portfolio}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
