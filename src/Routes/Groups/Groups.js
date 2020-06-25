import React from 'react';
import PropTypes from 'prop-types';
import './Groups.css';
import {ResultsList} from "../../components";

const columnTitles = ['Name', 'Status'];
const columnKeys = ['name', 'status'];

const Groups = () => (
    <div className="Groups">
        <ResultsList columnTitles={columnTitles} columnKeys={columnKeys} endpoint={"groups"}>
        </ResultsList>
    </div>
);

Groups.propTypes = {
    columnKeys: PropTypes.arrayOf(PropTypes.string),
    columnTitles: PropTypes.arrayOf(PropTypes.string)
};

Groups.defaultProps = {};

export default Groups;
