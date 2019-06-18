import React, { Component } from "react";
import { Redirect } from "react-router-dom"

export class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Redirect to="/python/getting-started" />
    }
}