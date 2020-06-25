import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/people">People</NavLink>
        <NavLink to="/groups">Groups</NavLink>
    </nav>
);

export default Navigation;
