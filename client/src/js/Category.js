import React, { Component } from 'react';
import '../css/Category.css'
import Section from './Section';
import List from './List';

const Category = (props) =>
{
    // expected props:
    //             title: category name
    //             subsections: an array of js objects

    // array of subsection JSX
    const subsections = props.subsections.map((cur, index) => {
        switch (cur.contentType)
        {
            case 'section':
                // todo: make sure spread operator is appropriate
                /* return (
                    <Section title={cur.title}
                             subtitle={cur.subtitle}
                             location={cur.location}
                             dateRange={cur.dateRange}
                             body={cur.body}
                             length={cur.length}
                    />

                ); */
                return <Section key={cur._id} {...cur} />;

            case 'list':
                return <List key={cur._id} {...cur} />;

            default:
                return <div> INVALID TYPE </div>;
        }

    });

    return (
        <div className={"category " + props.color}>
            <div className="title-container">
                <h2>{props.title.toUpperCase()}</h2>
            </div>
            <div className="subsection-container">
                {subsections}
            </div>
        </div>
    );
};

export default Category;