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
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis mattis sem a tristique. Nulla at nisl nec dolor molestie semper. Integer molestie enim elit, ac feugiat dolor vehicula vel. Cras eros enim, porta quis felis id, tristique molestie quam. Fusce non lectus enim. Vivamus rhoncus mi tortor, vitae convallis enim pulvinar et.`,
                            length: 'half'
                        },
                        {
                            contentType: 'section',
                            title: 'Writing',
                            subtitle: 'Books and papers',
                            location: 'São Paulo',
                            dateRange: '1997 - 1999',
                            body:
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis mattis sem a tristique. Nulla at nisl nec dolor molestie semper. Integer molestie enim elit, ac feugiat dolor vehicula vel. Cras eros enim, porta quis felis id, tristique molestie quam. Fusce non lectus enim. Vivamus rhoncus mi tortor, vitae convallis enim pulvinar et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis mattis sem a tristique. Nulla at nisl nec dolor molestie semper. Integer molestie enim elit, ac feugiat dolor vehicula vel. Cras eros enim, porta quis felis id, tristique molestie quam. Fusce non lectus enim. Vivamus rhoncus mi tortor, vitae convallis enim pulvinar et.`,
                            length: 'half'
                        }

                    ]
                },
                {
                    category: 'another one',
                    subsections: [
                        {
                            contentType: 'section',
                            title: 'Self Teaching',
                            subtitle: 'All kinds of subjects',
                            body:
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis mattis sem a tristique. Nulla at nisl nec dolor molestie semper. Integer molestie enim elit, ac feugiat dolor vehicula vel. Cras eros enim, porta quis felis id, tristique molestie quam. Fusce non lectus enim. Vivamus rhoncus mi tortor, vitae convallis enim pulvinar et.`,
                            length: 'full'
                        },
                        {
                            contentType: 'section',
                            title: 'Writing',
                            subtitle: 'Books and papers',
                            location: 'São Paulo',
                            dateRange: '1997 - 1999',
                            body:
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis mattis sem a tristique. Nulla at nisl nec dolor molestie semper. Integer molestie enim elit, ac feugiat dolor vehicula vel. Cras eros enim, porta quis felis id, tristique molestie quam. Fusce non lectus enim. Vivamus rhoncus mi tortor, vitae convallis enim pulvinar et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis mattis sem a tristique. Nulla at nisl nec dolor molestie semper. Integer molestie enim elit, ac feugiat dolor vehicula vel. Cras eros enim, porta quis felis id, tristique molestie quam. Fusce non lectus enim. Vivamus rhoncus mi tortor, vitae convallis enim pulvinar et.`,
                            length: 'half'
                        },
                        {
                            contentType: 'section',
                            title: 'Writing',
                            subtitle: 'Books and papers',
                            location: 'São Paulo',
                            dateRange: '1997 - 1999',
                            body:
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis mattis sem a tristique. Nulla at nisl nec dolor molestie semper. Integer molestie enim elit, ac feugiat dolor vehicula vel. Cras eros enim, porta quis felis id, tristique molestie quam. Fusce non lectus enim. Vivamus rhoncus mi tortor, vitae convallis enim pulvinar et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis mattis sem a tristique. Nulla at nisl nec dolor molestie semper. Integer molestie enim elit, ac feugiat dolor vehicula vel. Cras eros enim, porta quis felis id, tristique molestie quam. Fusce non lectus enim. Vivamus rhoncus mi tortor, vitae convallis enim pulvinar et.`,
                            length: 'half'
                        }

                    ]
                }
            ]
        }
    }

    render() {
        let test = this.state.content[0];
        let othertest = this.state.content[1];

        return (
            <div className="app">
                <Category title={test.category}
                          subsections={test.subsections}
                          color="gray"
                />
                <Category title={othertest.category}
                          subsections={othertest.subsections}
                          color="white"
                />
            </div>
        );
    }
}

export default App;
