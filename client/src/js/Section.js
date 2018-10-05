import React from 'react';
import '../css/Section.css'

const renderLocationAndDate = (location, dateRange) => {
    if (typeof location !== 'undefined' && typeof dateRange !== 'undefined') return <h3>{`${location}, ${dateRange}`}</h3>;
    else return null;
};

const Section = (props) =>
{
    let cssClassName = 'section-container ' + props.length;
    const {title, subtitle, location, dateRange, body} = props;

    return (
        <div className={cssClassName}>
            <h1>{title && title.toUpperCase() + " "}</h1>
            <h2>{subtitle && subtitle.toLowerCase()}</h2>
            <hr/>
            {renderLocationAndDate(location, dateRange)}
            <p>{body}</p>
        </div>
    );
};

export default Section;