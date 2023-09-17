import {useAuthentication} from "../../hooks/useAuthentication";

export default function WelcomeComponent(){
    const {isAuthenticated, username} = useAuthentication();
    return <>
        <h3>Home :</h3>
        {
            isAuthenticated ?
                <p>Welcome back <strong>{username}</strong> !</p> :
                <p>Blog tutorial for React learner.</p>
        }
    </>
}