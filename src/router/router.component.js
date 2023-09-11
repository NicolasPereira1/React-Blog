import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomeComponent from "../components/home/HomeComponent";
import AuthenticationComponent from "../components/authentication/AuthenticationComponent";
import WelcomeComponent from "../components/welcome/WelcomeComponent";
import PostComponent from "../components/post/./PostComponent";
import ArticleComponent from "../components/article/ArticleComponent";

const router =
    createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<HomeComponent/>}>
                <Route index element={<WelcomeComponent/>}/>
                <Route path='/home' element={<WelcomeComponent/>}/>
                <Route path='/post' element={<PostComponent/>}/>
                <Route path='/article' element={<ArticleComponent/>}/>
                <Route path='/login' element={<AuthenticationComponent/>}/>
            </Route>
        )
    );
export default function RouterComponent(){
    return <RouterProvider router={router} />
}