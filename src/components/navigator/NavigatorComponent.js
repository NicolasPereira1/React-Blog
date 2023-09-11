import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useTheme} from "../../hooks/useTheme";
import ToggleButtonComponent from "../toggleButton/ToggleButtonComponent";
import './Navigator.css';

export default function NavigatorComponent(){
    const navItems = ['Home','Post','Article','Login'];
    const [active, setActive] = useState('');
    const {theme} = useTheme();
    const activeStyle = (active) => {
        const style = {
            ...theme.nav.a,
            fontWeight: '700',
            textDecoration: 'underline'
        };
        return active ? style : {...theme.nav.a}
    };

    useEffect(() => {
        let path = window.location.pathname.split('/')[1];
        path = path.charAt(0).toUpperCase() + path.substring(1, path.length);
        setActive(path);
    }, []);

    return(
      <nav
          className='navigator'
          style={theme.nav}>
          {
           navItems.map((item, idx) =>
               <Link
                key={item}
                to={`${item.toLowerCase()}/`}
                onClick={()=>setActive(item)}
                style={activeStyle(active === item)}
               >{item}
               </Link>
           )
          }
          <ToggleButtonComponent/>
      </nav>
    );
}