import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import '../css/App.css';
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import Welcome from './Welcome';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="app">
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact={true}                component={Welcome}/>
                        <Route path="/about"                        component={Welcome}/>
                        <Route path="/home"                         component={Home}/>
                        <Route path="/portfolio"                    component={Portfolio}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

/**
 * Simple stateless component to hold the footer of the page.
 * @param props
 * @constructor
 */
const Footer = props => {
    const copyright = "© 2018 Léo Gonsalves – Feel free to make suggestions or pull requests in my github page!"

    return (
        <div className="footer">
            <p>{copyright}</p>
        </div>
    );
};

export default App;
