import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../css/Navbar.css';

// todo: fetch images from server. possibly use Flickr API

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.linkTitles = ['home', 'portfolio', 'about', 'resume'];
    }

    static defaultProps = {
        displayTitle: 'Léo Gonsalves',
        logo: logo
    };

    render() {
        return (
            <div className="navbar-container">
                <div className="link-container">
                    {this.linkTitles.map((item) => (<NavbarLink
                            key={item}
                            title={item}
                        />))}
                </div>
                <div className="logo-and-title-container">
                    <div className='logo-container'>
                        <img src={this.props.logo} alt="logo"/>
                    </div>
                    <h1 className="display-title">
                        {this.props.displayTitle}
                    </h1>
                </div>
            </div>
        );
    }
}

// functional stateless link component
const NavbarLink = props => {
    return (
        <div className='navbar-link'>
            <Link to={`/${props.title}`}>
                {props.title}
            </Link>
        </div>
    );
};

export default Navbar;