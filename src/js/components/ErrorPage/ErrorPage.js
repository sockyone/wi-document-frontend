import React, { Component } from "react";
import { Redirect } from "react-router-dom"

export class ErrorPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>404. This page is not valid</h1>
    }
}