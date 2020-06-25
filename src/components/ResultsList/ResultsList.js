import React, {Component} from 'react'
import {Table} from 'semantic-ui-react'

class ResultsList extends Component {
    baseUrl = "http://localhost:8080/api/";

    constructor(props) {
        super(props);
        this.columnTitles = props.columnTitles;
        this.columnKeys = props.columnKeys;
        this.state = {data: []};
        this.endpoint = props.endpoint
    }

    componentDidMount() {
        fetch(`${this.baseUrl}${this.endpoint}`)
            .then(response => response.json())
            .then(data => this.setState({data: data.data}));
    }

    render() {
        /**
         *
         * @param title
         * @returns {*}
         */
        function generateHeaderRow(title) {
            return <Table.HeaderCell>{title}</Table.HeaderCell>;
        }

        /**
         *
         * @param data
         * @returns {*}
         */
        function generateContentRow(data) {
            return <Table.Cell>{data}</Table.Cell>;
        }


        let data = this.state.data || [];
        let columnTitles = this.columnTitles.map(title => (generateHeaderRow(title)));
        let tableContent = data.map((person, index) => {
            return <Table.Row key={index}>{this.columnKeys.map(key => (generateContentRow(person[key])))}</Table.Row>;
        });


        return (
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        {columnTitles}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {tableContent}
                </Table.Body>
            </Table>
        );
    }

}

export default ResultsList
