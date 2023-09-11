import {Outlet} from "react-router-dom";
import NavigatorComponent from "../navigator/NavigatorComponent";
import {ThemeContext, useTheme} from "../../hooks/useTheme";
import './Home.css';

export default function HomeComponent(){
    const {theme} = useTheme(ThemeContext);
    return (
        <main
            className='mainDiv'
            style={theme.body}>
            <h1>My Blog</h1>
            <NavigatorComponent/>
            <Outlet/>
        </main>
    );
}