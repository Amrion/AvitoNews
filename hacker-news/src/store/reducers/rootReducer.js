import {combineReducers} from "redux";
import {mainReducer} from "./mainReducer";
import {pathReducer} from "./pathReducer";
import {newsReducer} from "./newsReducer";
import {commentReducer} from "./commentReducer";

export const rootReducer = combineReducers({
    news: mainReducer,
    path: pathReducer,
    currentNews: newsReducer,
    comment: commentReducer,
})