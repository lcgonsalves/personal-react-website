import React, { Component } from 'react';
import '../css/Portfolio.css';
import Category from './Category';

class Portfolio extends Component {
    // should fetch content of each category
    constructor(props)
    {
        super(props);

        this.state = {
            content: [],
            socialMediaItems: [],
            socialMediaPhrase: 'Find all my work here'
        };

        // fields that should be constant
        this.color = 'gray';

        this.toggleColor = this.toggleColor.bind(this);
        this.fetchSocialMediaLinks = this.fetchSocialMediaLinks.bind(this);
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
        this.fetchSocialMediaLinks();
    }

    fetchSocialMediaLinks()
    {
        return fetch('/content/sections/social-media')
                .then(data => data.json())
                .then(links => this.setState(
                    {socialMediaItems: [...links]}
                ))
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
        // render links to other websites first

        return (
            <div>
                <SocialMediaSection
                    links={this.state.socialMediaItems}
                    phrase={this.state.socialMediaPhrase}
                    color={this.toggleColor()}
                />
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

/**
 * Stateless component that encapsulates a social media logo,
 * title of social media, and a short description
 *
 * @param props should contain a 'title', 'description', and 'href' props
 */
const SocialMediaLink = props => {
    const title       = props.title,
          description = props.subtitle,
          href        = props.location;

    return (
        <div className='social-media-link-container'>
            <a className='social-media-link' href={href} target="_blank">
                <div className={'logo-' + title}/>
                <h2 className={title + ' social-media-title'}>{title}</h2>
                <h3 className={title + ' social-media-description'}>{description}</h3>
            </a>
        </div>
    );
};

/**
 * Stateless component that encapsulates all social media links fetched
 * from server.
 *
 * @param props should contain 'links', an array of social media link objects, and
 * 'phrase', a reference to the parent state referring to a quote; should also
 * contain a 'color' string prop referring to the style
 * @constructor
 */
const SocialMediaSection = props => {
    const {links, phrase, color} = props;

    return (
        <div className={"social-media-section-container " + color}>
            <h1>{phrase}</h1>
            <div className="social-media-section-links">
            {links.map((link) =>(
                <SocialMediaLink key={link.title} {...link}/>
            ))}
            </div>
        </div>
    );
};

export default Portfolio;