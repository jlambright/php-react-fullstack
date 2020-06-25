import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Menu} from 'semantic-ui-react';
import './Navigation.css';

const Navigation = () => (
    <Menu>
        <Container>
            <Menu.Item>
                <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/people">People</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/groups">Groups</NavLink>
            </Menu.Item>
        </Container>
    </Menu>
);

export default Navigation;
