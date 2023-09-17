import useFetch, {HTTP_METHOD, REQUEST_STATUS} from "../../hooks/useFetch";
import SpinnerComponent from "../spinner/SpinnerComponent";
import {ThemeContext, useTheme} from "../../hooks/useTheme";
import './Post.css';
import {useState} from "react";

const PostComponent = () => {
    const {theme} = useTheme(ThemeContext);
    const requestResult = useFetch('http://localhost:8080/posts', HTTP_METHOD.GET);
    const [hoverId, setHoverId] = useState(null);
    const postStyle = (id) => id === hoverId ? { ...theme.post, ...theme.post.hover} : theme.post;
    const titleStyle = (id, color) => id === hoverId ? {color} : {};
    return(
        <>
            <h3>Posts :</h3>
            <div className='postContainer'>
                {
                requestResult.status === REQUEST_STATUS.PENDING ? <SpinnerComponent/> :
                    requestResult.status === REQUEST_STATUS.OK ?
                    requestResult.data.map( post => {
                        const {id, title, content} = post;
                        return(
                            <div
                                key={id}
                                className='post'
                                style={postStyle(id)}
                                onMouseEnter={()=>setHoverId(id)}
                                onMouseLeave={()=>setHoverId(null)}>
                                <h3
                                    className='postTitle'
                                    style={titleStyle(id, post.color)}
                                >
                                    {title}
                                </h3>
                                <p>{content}</p>
                            </div>
                            );
                        }
                    ) : <p>No data found.</p>
                }
            </div>
        </>
    );
}

export default PostComponent;