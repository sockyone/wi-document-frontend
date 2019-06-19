import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PythonComponent } from "./PythonApi/PythonComponent";
import { HomePage } from "./HomePage/HomePage"
import { ErrorPage } from "./ErrorPage/ErrorPage"

class App extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }
    render() {
        return (
            <Router basename={'/documents'}>
                <div>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/python" component={HomePage} />
                    <Route path="/python/:id" component={PythonComponent} />
                </div>
            </Router>
        );
    }
}
export default App;