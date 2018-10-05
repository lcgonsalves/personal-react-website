import React, { Component } from 'react';
import '../css/Welcome.css';
import Category from './Category';
import Picture from './Picture';
import profilePic from '../img/profile.png';


class Welcome extends Component {
    // should fetch content of each category
    constructor(props)
    {
        super(props);

        this.state = {
            content: []
        };

        this.color = 'gray';

        this.toggleColor = this.toggleColor.bind(this);
    }

    /////// OBJECT TEMPLATE //////
    /*
    {
        category: 'string',
        subsections: [
            {
                ... could be list or section
            }
        ]
    }

    If we send one of these content objects as props of a Category object,
    it will render on the screen fine... I hope.
     */

    componentDidMount()
    {
        // for each fetched category, fetch related lists
        fetch('/categories/welcome')
            .then(data => data.json())
            .then(categories => {
                categories.forEach( (category) => {
                    const { name } = category;

                    let newContentItem = {
                        category: name,
                        subsections: []
                    };

                    let listUri = '/content/lists/' + name;
                    let sectionUri = '/content/sections/' + name;

                    // start with lists
                    fetch(sectionUri)
                        .then(sectionData => sectionData.json())
                        .then(sections => {
                            newContentItem.subsections.push(...sections);

                            return fetch(listUri);
                        })
                        .then(data => data.json())
                        .then(lists => newContentItem.subsections.push(...lists))
                        .catch(err => console.error(err))
                        .finally(() => this.setState((oldState) => (
                            {content: [...oldState.content, newContentItem]}
                        )));

                });
            }) // fetching happens here
            .catch(err => console.error(err))
            .finally(() => {
                // make sure "who" appears first
                this.setState((oldState) => {content: oldState.content.sort((item) => item.category !== 'who')});
            });
    }

    toggleColor()
    {
        if (this.color === 'gray')
            this.color = 'white';
        else
            this.color = 'gray';

        return this.color;
    }

    // todo: when rendering, find category 'who' and display first, then 'about the website', then all others
    render()
    {
        return (
            <div>
                <WelcomeStatement color={this.color}/>
                <Picture length="full" src={profilePic}/>
                {this.state.content.map((item, index) => {
                    return( <Category key={item.category}
                                         color={this.toggleColor()}
                                         title={item.category}
                                         subsections={item.subsections}
                                /> );
                })}
            </div>
        );
    }
}

/**
 * Component used to render a welcome statement before the other categories
 * on this page
 * @param props
 * @constructor
 */
const WelcomeStatement = props => (
    <div className={"welcome-statement " + props.color}>
        <h1>• welcome to my personal website! •</h1>
    </div>
);

export default Welcome;