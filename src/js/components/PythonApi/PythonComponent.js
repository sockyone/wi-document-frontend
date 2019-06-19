import React, { Component } from "react";
import { Link } from "react-router-dom"
import jsonData from "./../../../assets/json/lib.json"
import { PythonContentComponent } from "./PythonContentComponent.js";

export class PythonComponent extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
    }

    render() {
        let lists = Object.keys(jsonData).map((value, index) =>
            <List key={index} data={jsonData[value]} group={value} />
        );
        return (
            <div className="ui grid">
                <div className="row">
                    <div className="three wide column">
                        <div className="ui stackable large vertical menu" 
                                style={{ float: "left", position: 'fixed', maxHeight: "800px", overflowY: "auto", width: '18.75%', maxWidth: '250px' }}>
                            <a className="item" style={{ textAlign: "center" }}>Menu</a>
                            <div className="item" style={{paddingTop: '8px', paddingRight:'8px'}}>
                                {/* <div className="ui small icon input">
                                    <input type="text" placeholder="Search API..." />
                                    <i className="search icon"></i>
                                </div> */}
                                {lists}
                            </div>
                        </div>
                    </div>
                    <div className="thirteen wide column">
                        <PythonContentComponent />
                    </div>
                </div>
            </div>
        );
    }
}

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        }
        this.openSubMenu = this.openSubMenu.bind(this);
    }

    getClass() {
        if (this.state.isHidden)
            return "ui caret right icon";
        return "ui dropdown icon"
    }

    openSubMenu(e) {
        // console.log('clicked');
        this.setState((state, props) => {
            return {
                isHidden: !state.isHidden
            }
        });
    }

    render() {
        let lists = Object.keys(this.props.data).map((value, index) => {
            return <Link key={index} className="item" to={`/python/${this.props.group}?index=${index}`}>{value.substr(0, value.indexOf('('))}</Link>
        });
        return (
            <div className="item">
                <div onClick={this.openSubMenu}>
                    <b>{this.props.group}</b>
                    <i className={this.getClass()} style={{ float: "right" }}></i>
                </div>
                <div className="menu" hidden={this.state.isHidden} >
                    {lists}
                </div>
            </div>
        );
    }
}

