import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Dropdown, Menu} from 'semantic-ui-react';
import './Navigation.css';

const Navigation = () => (
    <Menu>
        <Container>
            <Menu.Item>
                <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item>
                <Dropdown item text='People'>
                    <Dropdown.Menu>
                        <NavLink to="/people">
                            <Dropdown.Item>List</Dropdown.Item>
                        </NavLink>
                        <NavLink to="/people/upload">
                            <Dropdown.Item>Upload</Dropdown.Item>
                        </NavLink>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
            <Menu.Item>
                <Dropdown item text='Groups'>
                    <Dropdown.Menu>
                        <NavLink to="/groups">
                            <Dropdown.Item>List</Dropdown.Item>
                        </NavLink>
                        <NavLink to="/groups/upload">
                            <Dropdown.Item>Upload</Dropdown.Item>
                        </NavLink>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </Container>
    </Menu>
);

export default Navigation;
