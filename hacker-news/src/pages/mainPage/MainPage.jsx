import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {mainAction, pagination} from "../../store/actions/mainAction";
import Loader from "../../components/loader/Loader";
import News from "../../components/news/News";
import './mainPage.scss'
import {convertTime} from "../../utils/convertTime";

const MainPage = () => {
    const {loading, error, news, loadingPag, errorPag, ids} = useSelector(state => state.news);
    const [fetch, setFetch] = useState(false);
    const dispatch = useDispatch();

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetch(true);
        }
    }

    useEffect(() => {
        if (ids.length === 80) {
            setFetch(false);
        }
    }, [ids])

    useEffect(() => {
        if (fetch && ids.length !== 0) {
            dispatch(pagination(ids)).then(() => setFetch(false));
        }
    }, [fetch])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return () => document.removeEventListener('scroll', scrollHandler);
    }, [])

    useEffect(() => {
        dispatch(mainAction());

        const update = setInterval(() => {
            dispatch(mainAction());
        }, 60000)
        return () => clearInterval(update);
    }, []);

    return (
        <div className='main-page'>
            {
                error &&
                <h1 className='error-fetch'> {error} </h1>
            }
            {
                loading
                    ?
                    <Loader/>
                    :
                    news.map((item, index) =>
                        item ?
                            <News id={item.id}
                                key={item.id}
                                title={item.title}
                                by={item.by}
                                date={convertTime(item.time)}
                                score={item.score}/>
                        :
                            <News id={null}
                                  key={index}
                                  title={"Новость пока обрабатывается... Перезагрузите страницу или подождите"}/>
                    )
            }
            {
                <div className='observer'></div>
            }
            {
                errorPag &&
                    <h1> className='error-fetch'> {error} </h1>
            }
            {
                loadingPag &&
                    <Loader class='pag'/>
            }
        </div>
    );
};

export default MainPage;