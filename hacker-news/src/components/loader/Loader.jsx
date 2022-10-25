import React from 'react';
import './loader.scss'

const Loader = (props = '') => {
    return (
        <div className={props ? [props.class, 'preloader'].join(' ') : 'preloader'}>
            <div className="preloader__row">
                <div className="preloader__item"></div>
                <div className="preloader__item"></div>
            </div>
        </div>
    );
};

export default Loader;