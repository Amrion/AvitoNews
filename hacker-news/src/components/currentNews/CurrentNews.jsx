import React, {useEffect} from 'react';
import './currentNews.scss'
import HeadNews from "../HeadNews/HeadNews";
import CurrentComment from "../currentComment/CurrentComment";
import {commentAction} from "../../store/actions/commentAction";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../loader/Loader";

const CurrentNews = ({title, url, by, time, kids, descendants}) => {
    const dispatch = useDispatch();
    const {errorCom, loadingCom, comment} = useSelector(state => state.comment);

    useEffect(() => {
        if (kids) {
            dispatch(commentAction(kids));
        }
    }, []);

    if (descendants === 0) {
        return (
            <div className='current-news'>
                <HeadNews title={title} by={by} url={url} time={time}/>
                <div className="comment">
                    <div className="count"> {descendants} Комментариев </div>
                    <div className='no-com'> К этой новости еще нет комментариев </div>
                </div>
            </div>
        )
    }

    return (
        <div className='current-news'>
            <HeadNews title={title} by={by} url={url} time={time}/>
            <div className="comment">
                <div className="count"> {descendants} Комментариев </div>
                {
                    errorCom &&
                    <h1 className='error-com'> {errorCom} </h1>
                }
                {
                    loadingCom
                        ?
                        <Loader class='com-loader'/>
                        :
                        comment.map(item =>  <CurrentComment key={item.id} by={item.by} text={item.text} kids={item.kids}/>)
                }
            </div>
        </div>
    );
};

export default CurrentNews;