import React from 'react';

const Preloader = (props) => {
    return (
        <div className="preloader-wrap">
            <div className={`preloader ${props.className ?? ''} `}></div>
        </div>
    );
};

export default Preloader;