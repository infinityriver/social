import React from 'react';
import s from './Navbar.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className={s.nav}>
            <div className={s.item}>

                <Link to='/profile/:id' className={location.pathname === '/profile/:id' ? s.activeLink : ''}>Profile</Link>

            </div>
            <div className={s.item}>

                <NavLink to='/dialogs/:id' className={location.pathname === '/dialogs/:id' ? s.activeLink : ''}>Dialogs</NavLink>

            </div>
            <div className={s.item}>

                <NavLink to='/news' className={location.pathname === '/news' ? s.activeLink : ''}>News</NavLink>

            </div>
            <div className={s.item}>

                <Link to='/music' className={location.pathname === '/music' ? s.activeLink : ''}>Music</Link>

            </div>
            <br />
            <div className={s.item}>

                <Link to='/settings' className={location.pathname === '/settings' ? s.activeLink : ''}>Settings</Link>

            </div>
            <div className={s.item}>

                <Link to='/users' className={location.pathname === '/users' ? s.activeLink : ''}>Users</Link>

            </div>
            <br/> 
            <div className={s.item}>

                <Link to='/sidebar' className={location.pathname === '/sidebar' ? s.activeLink : ''}>Sidebar</Link>
                
            </div>
        </nav>
    );
}

export default Navbar;