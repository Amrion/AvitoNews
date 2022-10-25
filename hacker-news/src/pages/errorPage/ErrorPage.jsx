import React from 'react';
import './errorPage.scss';

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <h1 className='error-main-text'> 404! Страница не найдена </h1>
            <div className='error-under-text'> Возможно, она была перемещена, или вы просто неверно указали адрес страницы. </div>
            <img src="404.gif" alt="Error" className="error-img"/>
        </div>
    );
};

export default ErrorPage;