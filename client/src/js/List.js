import React, { Component } from 'react';
import '../css/List.css'

const List = (props) =>
{
    let cssClassName = 'list-container ' + props.length;
    const {title, subtitle, items} = props;

    return (
        <div className={cssClassName}>
            <h1>{title.toUpperCase() + " "}</h1>
            <h2>{() => typeof subtitle !== 'undefined' ? subtitle.toLowerCase() : null}</h2>
            <hr/>
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={item + index}>
                            {item.toUpperCase()}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default List;