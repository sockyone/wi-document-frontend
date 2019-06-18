import React, { Component } from "react";
import { Route } from "react-router-dom";
import jsonData from "./../../../assets/json/lib.json";


export class PythonContentComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidUpdate(prevProps) {
        // value = value.groupValue;
        // let index = value.split("").reverse().join("").indexOf('/');
        // let newValue = value.substr(value.length - index, value.length - 1);
        // this.updateList(newValue);

    }

    updateList(value) {
        // this.listObj = value;
    }

    render() {
        let listValue = <p>Nothing</p>;
        return (
            <Route path = "/python/:id" component = {PythonContent}/>
        );
    }
}


class PythonContent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        let content = jsonData[this.props.match.params.id];
        if (content == null) {
            return <p>Loading...</p>
        }
        let lists = Object.keys(content).map(value=>{
            return (
                <div style={{margin: "50px", borderTop: '10px', borderBottom: '10px'}}>
                    <h3>{value}</h3>
                    <h4>Required:</h4>
                    
                    {Object.keys(content[value]['params']['required']).map(value2 => {
                        if (content[value]['params']['required'])
                        return <p>{value2}: {content[value]['params']['required'][value2]}</p>
                    })}
                    <h4>Optional:</h4>
                    {Object.keys(content[value]['params']['optional']).map(value2 => {
                        if (content[value]['params']['optional'])
                        return <p>{value2}: {content[value]['params']['optional'][value2]}</p>
                    })}
                    <h4>Returns: {content[value]['returns']}</h4>
                    <h4>Explain: {content[value]['explain']}</h4>
                    <h4>Example:</h4>
                    <p style = {{whiteSpace: 'pre'}}>{content[value]['example']}</p>
                    {/* <h4>Explain:</h4>
                    {Object.keys(content[value]['explain']).map(value2 => {
                        return <p>{value2}: {content[value]['params']['required'][value2]}</p>
                    })}
                    <h4>Example:</h4>
                    {Object.keys(content[value]['example']).map(value2 => {
                        return <p>{value2}: {content[value]['params']['required'][value2]}</p>
                    })} */}
                </div>
            );
        })
        return (
            <div>
                {lists}
            </div>
        );
    }
}
