import React, { Component } from 'react';
import '../css/App.css';
import Category from './Category';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            availableCategories: [],
            content: [
                {
                    category: 'skills',
                    subsections: [
                        {
                            contentType: 'section',
                            title: 'Self Teaching',
                            subtitle: 'All kinds of subjects',
                            body:
                                `I am very good at self teaching
                                and I really like to self teach
                                stuff and things`,
                            length: 'half'
                        },
                        {
                            contentType: 'section',
                            title: 'Writing',
                            subtitle: 'Books and papers',
                            location: 'SP',
                            dateRange: '1997 - 1999',
                            body:
                                `I am very good at writing all matters
                                of things and stuff, as well as stuff and things`,
                            length: 'half'
                        }

                    ]
                }
            ]
        }
    }

    render() {
        let test = this.state.content[0];

        return (
            <div className="app">
                <Category title={test.category}
                          subsections={test.subsections}
                />
            </div>
        );
    }
}

export default App;
