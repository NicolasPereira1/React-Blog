import {useAuthentication} from "../../hooks/useAuthentication";
import {ThemeContext, useTheme} from "../../hooks/useTheme";
import {useEffect} from "react";

const LogoutFormComponent = ({setAuthentication, setUsername}) => {
    const {theme} = useTheme(ThemeContext);
    const logout = () => {
        setAuthentication(false);
        setUsername(null);
    };
    return  <button
        className='inputButton'
        style={theme.inputButton}
        onClick={logout}>
        Logout
    </button>;
}

const LoginFormComponent = ({setAuthentication, setUsername, disabled}) => {
    const {theme} = useTheme(ThemeContext);
    const login = () => setAuthentication(true);
    const buttonStyle = !disabled ? theme.inputButton : {...theme.inputButton, ...theme.disabled };
    useEffect(() => {}, [disabled]);
    return (
        <>
            <input
                className='inputButton'
                style={theme.inputButton}
                onChange={(event) => setUsername(event.target.value)}
                placeholder='Username'
            />
            <button
                className='inputButton'
                style={buttonStyle}
                onClick={login}
                disabled={disabled}>
                Login
            </button>
        </>
    );
}

export default function AuthenticationComponent(){
    const {isAuthenticated, setAuthentication, username, setUsername} = useAuthentication();
    const message = isAuthenticated ?
        `👨‍💻 You are logged as ` :
        '👤 You are not authenticated';
    return (
        <>
            <p>{message}
                <strong>{ isAuthenticated && username }</strong>.
            </p>
            {
            !isAuthenticated ?
                <LoginFormComponent
                    setAuthentication={setAuthentication}
                    setUsername={setUsername}
                    disabled={!username}
                /> :
                <LogoutFormComponent
                    setAuthentication={setAuthentication}
                    setUsername={setUsername}
                />
            }
        </>
    );
}