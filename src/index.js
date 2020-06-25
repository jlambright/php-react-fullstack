import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container, Header} from "semantic-ui-react";
import {Navigation} from "./components";
import {Error, Groups, Home, People} from "./Routes";

const App = ({children}) => (
    <Container style={{margin: 20}}>
        <Header as="h3"><span role="img" aria-label="logo">⛵️</span> Breeze Church Management </Header>

        {children}
    </Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
    <App>
        <Router>
            <div>
                <Navigation/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/people" component={People}/>
                    <Route path="/groups" component={Groups}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </Router>
    </App>,
    document.getElementById("root")
);
