import React from 'react';
import s from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://w7.pngwing.com/pngs/708/311/png-transparent-icon-logo-twitter-logo-twitter-logo-blue-social-media-area.png'/>

            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <Link to={'/login'}>Login</Link>}
            </div>
        </header>
    );
}

export default Header;