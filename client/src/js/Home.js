import React, { Component } from 'react';
import '../css/Home.css';
import profilePic from '../../public/img/profile.png'


class Home extends Component
{
    static defaultProps = {
        sections: [],
        lists: []
    };

    render()
    {
        let sections = this.props.sections.map((c, index) => {
            return <Section key={c._id}
                            title={c.title}
                            subtitle={c.subtitles}
                            body={c.body}
                    />;
        });

        let lists = this.props.lists.map((l, index) => {
            return <List key={l._id}
                         title={l.title}
                         items={l.items}
                    />
        });

        let bioTitle = 'title';
        let bioSubtitle = 'subtitle';
        let bioBody = 'lorem ipsum';

        return (
            <div>
                <div className="bio">
                    <Section title={bioTitle} subtitle={bioSubtitle} body={bioBody} img={profilePic}/>
                </div>
                <div className="lists">
                    {lists}
                </div>
                <div className="sections">
                    {sections}
                </div>
            </div>
        );
    }

}

export default Home;