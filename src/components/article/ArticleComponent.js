import {useEffect, useRef, useState} from "react";
import {useTheme} from "../../hooks/useTheme";

const ArticleComponent = () => {
    const {theme} = useTheme();
    const [counter, setCounter] = useState(0);
    let prev =  useRef(0);
    useEffect(() => {
        prev.current = counter;
    }, [counter]);
    return(
        <>
            <h3>Articles :</h3>
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h6>h6</h6>
            <p>{counter}</p>
            <p>{prev.current}</p>
            <button
                className='inputButton'
                style={theme.inputButton}
                onClick={()=>setCounter((c=>c+1))}>
                Click me!
            </button>
        </>
    );
}

export default ArticleComponent;