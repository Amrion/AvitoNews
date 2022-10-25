import React from 'react';
import './welcomePage.scss'
import {Link} from "react-router-dom";
import {changePath} from "../../store/reducers/pathReducer";
import {useDispatch} from "react-redux";

const WelcomePage = () => {
    const dispatch = useDispatch();

    return (
        <div className='welcome-page'>
            <h1 className="welcome-h1">Приветствую на <span className='welcome-span'>Hacker News</span></h1>
            <div className="welcome-tutor">Нажмите на <b>Новости</b> сверху или на кнопку <br/> и читайте с удовольствием!</div>
            <Link onClick={() => dispatch(changePath('/news'))}
                  to='/news'
                  className="go-btn navbar__btn">Читать новости</Link>
        </div>
    );
};

export default WelcomePage;