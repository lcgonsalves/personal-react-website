import React, { Component } from 'react';
import '../css/App.css';
import Home from "./Home";

const pageEnum = Object.freeze({'home': 1, 'resume': 2, 'other': 3});

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            page: pageEnum.home,
            categories: []
        };

    }

    /**
     * Fetch all categories on server
     */
    componentDidMount()
    {
        this.updateCategories()
        // todo: refactor so ALL  GETs are made in APP.js
    }

    /**
     * Get all categories on server
     */
    updateCategories()
    {
        fetch('/categories/').then((data) => data.json())
            .then((categories) => this.setState({categories: [...categories]}))
            .catch((err) => console.error(err))
            .finally(() => console.log(this.state.categories));
    }

    render() {
        return (
            <div className="app">
                <Home categories={this.state.categories}/>
            </div>
        );
    }
}

export default App;
