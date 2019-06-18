import React, { Component } from "react";
import { Link } from "react-router-dom";
import jsonData from "./../../../assets/json/lib.json";


export class PythonContentComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return <h1>Hello</h1>
    }
}