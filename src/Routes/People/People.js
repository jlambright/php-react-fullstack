import React from 'react';
import PropTypes from 'prop-types';
import './People.css';
import {ResultsList} from '../../components';

const columnTitles = ['First Name', 'Last Name', 'Email', 'Status'];
const columnKeys = ['first_name', 'last_name', 'email_address', 'status'];

const People = () => (
    <div className="People">
        <ResultsList columnTitles={columnTitles} columnKeys={columnKeys} endpoint={"people"}>
        </ResultsList>
    </div>
);

People.propTypes = {
    columnKeys: PropTypes.arrayOf(PropTypes.string),
    columnTitles: PropTypes.arrayOf(PropTypes.string)
};

People.defaultProps = {};

export default People;
