import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import './Home.css';
import README from './README.md';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {markdown: ''};
    }

    componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(README).then(res => res.text()).then(text => this.setState({markdown: text}));
    }

    render() {
        const {markdown} = this.state;

        return (
            <div className="Home">
                <ReactMarkdown source={markdown}/>
            </div>
        );
    };
}

//Home.propTypes = {};

Home.defaultProps = {};

export default Home;
