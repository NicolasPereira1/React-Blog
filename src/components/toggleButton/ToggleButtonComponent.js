import {ThemeContext, useTheme} from "../../hooks/useTheme";
import './ToggleButton.css';

const ToggleButtonComponent = () => {
    const {theme, toggleTheme} = useTheme(ThemeContext);
    return(
        <div
            className='toggleDiv'
            style={theme.toggleDiv}>
            <button
                className='themeButton'
                style={theme.themeButton}
                onClick={toggleTheme}>
                {theme.icon}
            </button>
        </div>
    );
}

export default ToggleButtonComponent;