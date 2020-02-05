import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png" alt="Logo" />
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div> <Typography>{props.login}</Typography> <Button variant="outlined" color="primary" size="small" onClick={props.logout}>Log out</Button> </div> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;