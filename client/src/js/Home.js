import React, { Component } from 'react';
import '../css/Home.css';

import List from "./List";
import Section from "./Section"

const colorClass1 = "gray";
const colorClass2 = "white";

class Home extends Component
{
    constructor(props) {
        super(props);
        this.shade = 1; // used to determine color
        this.state = { // init state from props
            content: [
                {
                    category: '',
                    relatedLists: [],
                    relatedSections: []
                }
            ]
        };
    }

    static defaultProps = {
        categories: [],
    };

    /**
     * Will parse every category in the props and fetch sections
     * and lists for each, populating the state.
     */
    componentDidMount(){
        // update state from props
        this.setState({content: this.props.categories.map((currentCategory, index) => {
            // make objects from the categories
            return {
                category: currentCategory.name,
                relatedLists: [],
                relatedSections: []
            }
        })});

        console.log(this.props);
        console.log(this.state);

        // for each category, GET all sections and lists
        this.props.categories.forEach((category, index, array) => {
            this.getAllSections(category.name);
            this.getAllLists(category.name);
        })
    }

    /**
     * Fetches lists by given category name and populates
     * the state.
     * @param categoryName
     */
    getAllLists(categoryName) {
        let uri = '/content/' + categoryName + '/lists';

        fetch(uri)
            .then((data) => data.json())
            .then((lists) => {
                this.setState({
                    content: this.state.content.map((item, index) => {
                        if (item.category !== categoryName)
                            return {...item};
                        else
                        {
                            let newItem = {...item};
                            newItem.relatedLists = [...lists];
                            return newItem;
                        }
                    })
                });
            })
            .catch((err) => console.error(err));
    }

    /**
     * Fetches lists by given category name and populates
     * the state.
     * @param categoryName
     */
    getAllSections(categoryName) {
        let uri = '/content/' + categoryName + '/sections';

        fetch(uri)
            .then((data) => data.json())
            .then((sections) => {
                this.setState({
                    content: this.state.content.map((item, index) => {
                        if (item.category !== categoryName)
                            return {...item};
                        else {
                            let newItem = {...item};
                            newItem.relatedSections = [...sections];
                            return newItem;
                        }

                    })
                });
            })
            .catch((err) => console.error(err));
    }

    extractJSXbyCategory(contentObj) {
        let listArray = contentObj.relatedLists.map((list, index) => {
            return(<div className="category-item">
                        <List title={list.title}
                         subtitle={list.subtitle}
                         items={list.items}
                         category={list.category}
                         key={list._id}
                    /> </div>);
        });

        let sectionArray = contentObj.relatedSections.map((sec, index) => {
           return (<div className="category-item">
                        <Section title={sec.title}
                           subtitle={sec.subtitle}
                           location={sec.location}
                           dateRange={sec.dateRange}
                           body={sec.body}
                           key={sec._id}
                        /></div>);
        });

        let cname = "category-encapsulating-container ";
        if (this.shade === 1)
        {
            cname += colorClass1;
            this.shade = 2;
        }
        else if (this.shade === 2)
        {
            cname += colorClass2;
            this.shade = 1;
        }

        // organize divs
        return (
            <div className={cname}>
                <div className="left-container">
                    <h2 className="category-name">{contentObj.category}</h2>
                </div>
                <div className="right-container">
                    {listArray}
                    {sectionArray}
                </div>

            </div>
        );
    }

    render() // todo: actually go through state and get the JSX
    {
        // todo: put bio in separate page
        return (
            <div className="main-container rectangle vertical-flex">
                {this.state.content.forEach((item, index) => {
                    return this.extractJSXbyCategory(item);
                })}
            </div>
        );
    }

}

export default Home;