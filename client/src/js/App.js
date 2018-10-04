import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import '../css/App.css';
import Navbar from './Navbar';
import Home from './Home';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // fetch categories as soon as app starts
            availableCategories: []
        };

        this.refreshCategories = this.refreshCategories.bind(this);
    }

    // fetch all categories in server
    componentDidMount()
    {
        this.refreshCategories();
    }

    refreshCategories() {
        fetch('/categories/all')
            .then(data => data.json())
            .then(categories => {
                console.log(categories);
                this.setState({availableCategories: [...categories]})
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <Router>
                <div className="app">
                    <Navbar/>
                    <Switch>
                        <Route path="/home" render={() => (
                            <Home categories={this.state.availableCategories.filter(category => (category.page === 'home'))}/>
                        )}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
