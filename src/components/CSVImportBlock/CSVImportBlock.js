import React, {Component} from 'react'
import CSVReader from 'react-csv-reader'
import PropTypes from 'prop-types';
import './CSVImportBlock.css';

class CSVImportBlock extends Component {

    // PapaParse 5 default options: https://www.papaparse.com/docs#config
    parseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: header =>
            header
                .toLowerCase()
                .replace(/\W/g, '_')
    }

    constructor(props) {
        super(props);
        this.onFileLoaded = props.onFileLoaded;
        this.onError = props.onError;
    }

    render() {
        return (
            <CSVReader
                cssClass="csv-reader-input"
                label="Select CSV with secret Death Star statistics"
                onFileLoaded={this.onFileLoaded}
                onError={this.onError}
                parserOptions={this.parseOptions}
                inputId="ObiWan"
                inputStyle={{color: 'red'}}
            />
        )
    }
}

CSVImportBlock.propTypes = {
    inputId: PropTypes.string.isRequired,
    onFileLoaded: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired

};

CSVImportBlock.defaultProps = {
    onError: (error) => console.log(error),
};

export default CSVImportBlock;
