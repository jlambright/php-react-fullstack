import React, {Component} from 'react'
import Papa from 'papaparse'
import PropTypes from 'prop-types';
import './CSVImportBlock.css';
import {Button, Header, Icon, Segment} from "semantic-ui-react";

class CSVImportBlock extends Component {

    // PapaParse 5 default options: https://www.papaparse.com/docs#config
    parseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        step: (row) => this.addRow(row.data),
        transformHeader: header =>
            header
                .toLowerCase()
                .replace(/\W/g, '')
    }

    fileInputRef = React.createRef();

    constructor(props) {
        super(props);
        this.label = props.label;
        this.onFileLoaded = props.onFileLoaded;
        this.onError = props.onError;
        this.endpoint = props.endpoint;
    }

    fileChange = e => {
        this.setState({file: e.target.files[0]}, () => {
            Papa.parse(this.state.file, this.parseOptions);
        });
    };

    addRow(data) {
        fetch(`http://localhost:8080/api/${this.endpoint}/`, {
            method: 'POST',
            body: data
        }).then(results => console.log(results));
    }

    render() {
        return (
            <Segment placeholder label={this.label}>
                <Header icon>
                    <Icon name='file outline'/>
                    <Button primary
                            onClick={() => this.fileInputRef.current.click()}>
                        Import {this.endpoint.charAt(0).toUpperCase() + this.endpoint.slice(1)} CSV File
                    </Button>
                    <input
                        ref={this.fileInputRef}
                        type="file"
                        hidden
                        onChange={this.fileChange}
                    />
                </Header>
            </Segment>
        )
    }
}

CSVImportBlock.propTypes = {
    endpoint: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
    label: PropTypes.string

};

CSVImportBlock.defaultProps = {
};

export default CSVImportBlock;
