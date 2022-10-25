import React, {useState} from 'react';
import './currentComment.scss'
import {getAnswer} from "../../utils/getAnswer";
import Loader from "../loader/Loader";

const CurrentComment = ({by, text, kids}) => {
    const [answer, setAnswer] = useState(null);
    const [loading, setLoading] = useState(false);
    const [click, setClick] = useState(false);
    const [error, setError] = useState('')

    const getCom = async () => {
        setLoading(true);
        setClick(true);

        try {
            const res = await getAnswer(kids);
            setAnswer(res);
        } catch (e) {
            setError('Ошибка при загрузке ответа, попробуйте позже');
        } finally {
            setLoading(false);
        }
    }

    const deleteCom = () => {
        setClick(false);
        setAnswer(null);
    }

    return (
        <div>
            <div className='current-com'>
                <div className='com-profile'>
                    <svg className='svg-com' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" id="Layer_1"
                         viewBox="0 0 64 64">
                        <path
                            d="M32,16a7,7,0,1,0,7,7A7,7,0,0,0,32,16Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,32,28Zm24,4A24,24,0,1,0,18.28,51.67l0,0,.17.11c.39.27.79.52,1.19.76l.49.29c.32.18.65.35,1,.52l.43.22c.43.21.86.4,1.3.58l.53.21c.38.15.77.28,1.16.41L25,55c.44.14.89.26,1.35.37l.48.11c.49.11,1,.21,1.47.28l.15,0c.5.08,1,.13,1.51.18l.43,0c.53,0,1.07.06,1.62.06s1.09,0,1.62-.06l.43,0c.5,0,1-.1,1.51-.18l.15,0c.49-.07,1-.17,1.47-.28l.48-.11c.46-.11.91-.23,1.35-.37l.41-.13c.39-.13.78-.26,1.16-.41l.53-.21c.44-.18.87-.37,1.3-.58l.43-.22c.33-.17.66-.34,1-.52l.49-.29c.4-.24.8-.49,1.19-.76l.17-.11,0,0A24,24,0,0,0,56,32ZM19,46a13,13,0,0,1,26,0,12.71,12.71,0,0,1-.73,4.25l-.24.16c-.3.19-.6.38-.91.56l-.45.26-1.14.6-.39.18-.91.39-.49.19c-.41.15-.82.3-1.23.43l-.37.1c-.34.1-.68.19-1,.27l-.44.11c-.45.09-.9.18-1.36.25l-.23,0c-.4.06-.82.1-1.23.14l-.39,0c-.49,0-1,0-1.46,0s-1,0-1.46,0l-.39,0c-.41,0-.83-.08-1.23-.14l-.23,0c-.46-.07-.91-.16-1.36-.25l-.44-.11c-.35-.08-.69-.17-1-.27l-.37-.1c-.41-.13-.82-.28-1.23-.43l-.49-.19L22.86,52l-.39-.18q-.57-.28-1.14-.6L20.88,51c-.31-.18-.61-.37-.91-.56l-.24-.16A12.71,12.71,0,0,1,19,46Zm27.81,2.25A14.24,14.24,0,0,0,47,46a15,15,0,0,0-30,0,14.24,14.24,0,0,0,.19,2.25,22,22,0,1,1,29.62,0Z"/>
                    </svg>
                    <div className="com-by"> {by} </div>
                </div>
                <div className="text-btn">
                    <div className="com-text">
                        {
                            text
                                ?
                                text
                                :
                                'Пользователь не дал комментарий'
                        }
                    </div>
                    {
                        kids && !click
                            ?
                            <div onClick={() => getCom()} className="btn-open"> Ответы - {kids.length}</div>
                            :
                            ''
                    }
                    {
                        kids && click
                            ?
                            <div onClick={() => deleteCom()} className="btn-open"> Свернуть </div>
                            :
                            ''
                    }
                </div>
            </div>
            {
                kids && loading
                    ?
                    <Loader class='ans-loader'/>
                    :
                    ''
            }
            {
                error &&
                <h1 className='error-ans'> {error} </h1>

            }
            {
                answer && !loading
                    ?
                    <div className='answer'>
                        {
                            answer.map(item => <CurrentComment key={item.id} text={item.text} kids={item.kids}
                                                               by={item.by}/>)
                        }
                    </div>
                    :
                    ''
            }
        </div>
    );
};

export default CurrentComment;