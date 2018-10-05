import React, { Component } from 'react';
import '../css/Home.css';
import Category from './Category';

class Home extends Component {
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
        fetch('/categories/home')
            .then(data => data.json())
            .then(categories => {
                console.log(categories);
                categories.forEach( (category) => {
                    const { name } = category;

                    let newContentItem = {
                            category: name,
                            subsections: []
                        };

                    let listUri = '/content/lists/' + name;
                    let sectionUri = '/content/sections/' + name;

                    // start with lists
                    fetch(listUri)
                        .then(listData => listData.json())
                        .then(lists => {
                            console.log(lists);
                            newContentItem.subsections.push(...lists);

                            return fetch(sectionUri);
                        })
                        .then(sectionData => sectionData.json())
                        .then(sections => newContentItem.subsections.push(...sections))
                        .catch(err => console.error(err))
                        .finally(() => this.setState((oldState) => (
                            {content: [...oldState.content, newContentItem]}
                        )));

                });
            }) // fetching happens here
            .catch(err => console.error(err));
    }

    toggleColor()
    {
        if (this.color === 'gray')
            this.color = 'white';
        else
            this.color = 'gray';

        return this.color;
    }

    render()
    {
        return (
          <div>
              {this.state.content.map((item, index) => (
                  <Category key={item.category}
                            color={this.toggleColor()}
                            title={item.category}
                            subsections={item.subsections}
                  />
              ))}
          </div>
        );
    }
}

export default Home;