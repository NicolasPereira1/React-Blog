import './Spinner.css';
import {useTheme} from "../../hooks/useTheme";

const SpinnerComponent = () => {
    const {theme} = useTheme();
    return <div className='spinner' style={theme.spinner}></div>;
};

export default SpinnerComponent;