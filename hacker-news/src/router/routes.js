import MainPage from "../pages/mainPage/MainPage";
import WelcomePage from "../pages/welcomePage/WelcomePage";
import NewsPage from "../pages/newsPage/NewsPage";
import ErrorPage from "../pages/errorPage/ErrorPage";

export const routes = [
    {path: '/', component: WelcomePage, exact: true},
    {path: '/news', component: MainPage, exact: true},
    {path: '/news/:id', component: NewsPage, exact: true},
    {path: '*', component: ErrorPage, exact: true},
]