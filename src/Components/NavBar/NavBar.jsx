import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {




    return(
        <nav className="navBar">
            <NavLink className="Documents" activeClassName="active" to="/Documents" > Документы </NavLink>
            <NavLink className="Сorrespondence" activeClassName="active" to="/Сorrespondence" > Переписка </NavLink>
        </nav>
    )
}
export default NavBar;