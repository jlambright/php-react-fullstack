import React from 'react';
import {Dimmer, Loader, Segment} from 'semantic-ui-react'
import './Loader.css';

const Loader = () => (
    <Segment>
        <Dimmer active>
            <Loader/>
        </Dimmer>
    </Segment>
);

Loader.propTypes = {};

Loader.defaultProps = {};

export default Loader;
