import React, {useEffect, useState} from 'react';
import './navbar.scss'
import {useDispatch, useSelector} from "react-redux";
import {mainAction} from "../../store/actions/mainAction";
import {Link} from "react-router-dom";
import {changePath} from "../../store/reducers/pathReducer";
import {commentAction} from "../../store/actions/commentAction";
import {changeTheme} from "../../utils/changeTheme";

const Navbar = () => {
    const path = useSelector(state => state.path.path);

    useEffect(() => {
        const id = +/\d+/.exec(window.location.pathname);

        switch (window.location.pathname) {
            case '/news': {
                setFlagBtnNews(true);
                setFlagBtnCom(false);

                break;
            }
            case `/news/${id}`: {
                setFlagBtnNews(false);
                setFlagBtnCom(true);

                break;
            }
            default: {
                setFlagBtnNews(false);
                setFlagBtnCom(false);

                break;
            }
        }
    }, [path]);

    const news = useSelector(state => state.currentNews.news);
    const [flagBtnNews, setFlagBtnNews] = useState(false);
    const [flagBtnCom, setFlagBtnCom] = useState(false);
    const active = ['navbar__atr', 'active'];
    const dispatch = useDispatch();

    return (
        <div className='navbar'>
            <Link onClick={() => dispatch(changePath('/'))} to='/' className="navbar__name"> Hacker News </Link>
            <Link onClick={() => dispatch(changePath('/news'))}
                  to='/news'
                  className={flagBtnNews ? active.join(' ') : 'navbar__atr'}> Новости </Link>
            <div onClick={() => changeTheme()} className='navbar__atr'> Поменять тему </div>
            {
                flagBtnNews &&
                    <button onClick={() => dispatch(mainAction())} className="navbar__btn"> Обновить новости </button>
            }
            {
                flagBtnCom &&
                    <button onClick={() => dispatch(commentAction(news.kids))} className="navbar__btn"> Обновить комментарии </button>
            }
        </div>
    );
};

export default Navbar;