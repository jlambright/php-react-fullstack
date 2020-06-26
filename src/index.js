import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container, Divider, Header} from "semantic-ui-react";
import {CSVImportBlock, Navigation} from "./components";
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
                <Divider/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path={'/groups/upload'}>
                        <Container>
                            <CSVImportBlock
                                endpoint={'groups'}
                                inputId={'groupsCSVUpload'}
                                label={'Select the CSV file for Groups import.'}
                            />
                        </Container>
                    </Route>
                    <Route path={'/groups'} component={Groups}/>
                    <Route path={'/people/upload'}>
                        <Container>
                            <CSVImportBlock
                                endpoint={'people'}
                                inputId={'peopleCSVUpload'}
                                label={'Select the CSV file for People import.'}
                            />
                        </Container>
                    </Route>
                    <Route path={'/people'} component={People}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </Router>
    </App>,
    document.getElementById("root")
);
