import useFetch, {HTTP_METHOD} from "../../hooks/useFetch";
import SpinnerComponent from "../spinner/SpinnerComponent";
import {ThemeContext, useTheme} from "../../hooks/useTheme";
import './Post.css';

const PostComponent = () => {
    const {theme} = useTheme(ThemeContext);
    const posts = useFetch('http://localhost:8080/posts', HTTP_METHOD.GET);
    return(
        <div className='postContainer'>
            {
            posts.length > 0 ?
            posts.map( post => {
                const {id, title, content} = post;
                return(
                    <div
                        key={id}
                        className='post'
                        style={theme.post}>
                        <h3 className='postTitle'>{title}</h3>
                        <p>{content}</p>
                    </div>
                    );
                }
            ) : <SpinnerComponent/>
        }</div>
    );
}

export default PostComponent;