import React, { Component } from 'react';
import '../css/App.css';
import Home from "./Home";

const pageEnum = Object.freeze({'home': 1, 'resume': 2, 'other': 3});

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            page: pageEnum.home
        };

    }

    render() {
        // todo: remove temp data
        const tempSections = [
            {

            }

        ];

        const tempLists = [

        ];


        return (
            <div className="app">
                <Home/>
            </div>
        );
    }
}

export default App;
