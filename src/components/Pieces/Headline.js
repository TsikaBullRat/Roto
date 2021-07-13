import React from 'react';

export const Headline = (prop) => {
    return (
        <div className="row headline_box">
            <div className="line"></div>
            <h2>{prop.headline}</h2>
            <div className="line"></div>
        </div>
    )
}