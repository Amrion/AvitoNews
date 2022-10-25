import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {newsAction} from "../../store/actions/newsAction";
import Loader from "../../components/loader/Loader";
import './newsPage.scss';
import CurrentNews from "../../components/currentNews/CurrentNews";
import {convertTime} from "../../utils/convertTime";
import ErrorPage from "../errorPage/ErrorPage";

const NewsPage = () => {
    const id = +/\d+/.exec(window.location.pathname);

    const {error, loading, news} = useSelector(state => state.currentNews);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newsAction(id));
    }, []);

    if (id === 0) {
        return (
            <div>
                <ErrorPage/>
            </div>
        )
    }

    return (
        <div className='news-page'>
            {
                error &&
                <h1 className='error-fetch'> {error} </h1>
            }
            {
                !loading
                    ?
                    <CurrentNews descendants={news.descendants}
                                 url={news.url}
                                 title={news.title}
                                 by={news.by}
                                 time={convertTime(news.time)}
                                 kids={news.kids}/>
                    :
                    <Loader/>
            }
        </div>
    );
};

export default NewsPage;