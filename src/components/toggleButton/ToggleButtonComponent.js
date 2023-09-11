import {ThemeContext, useTheme} from "../../hooks/useTheme";
import './ToggleButton.css';

const ToggleButtonComponent = () => {
    const {theme, setLightMode, setDarkMode} = useTheme(ThemeContext);
    const handleClick = (e) => theme.name === '🌞' ? setDarkMode() : setLightMode();
    return(
        <div
            className='toggleDiv'
            style={theme.toggleDiv}>
            <button
                className='themeButton'
                style={theme.themeButton}
                onClick={handleClick}>
                {theme.name}
            </button>
        </div>
    );
}

export default ToggleButtonComponent;