import React, { Component, createRef } from "react";
import { Route } from "react-router-dom";
import jsonData from "./../../../assets/json/lib.json";

const marginTopBot = {
    marginTop: '10px',
    marginBottom: '10px'
}

const codeXMLCss = {
    fontFamily: ['Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'monospace'],
    fontWeight: 'normal',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    backgroundColor: '#f8f9fa',
    paddingLeft: '30px',
    
}

export class PythonContentComponent extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }

    render() {
        let listValue = <p>Nothing</p>;
        return (
            <React.Fragment>
                <Route path="/python/:id" component={PythonContent} />
                <Route exact path="python/:id/:index" component={PythonContent} />
            </React.Fragment>
        );
    }
}


class PythonContent extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.itemRefs = {};
    }

    componentDidMount() {
        // this.componentDidUpdate(null);
    }

    componentDidUpdate(previous) {
        if (previous) {
            if (this.props.location.search == "") return;
            if (this.props.location.pathname == previous.location.pathname
                && this.props.location.search == previous.location.search) return;
        }
        let indexOfEqual = this.props.location.search.indexOf('=');
        let index = this.props.location.search.substr(indexOfEqual + 1, this.props.location.search.length - 1);
        // console.log(this.props.match.params.id + index);
        // console.log(this.itemRefs);
        this.scrollTo(this.props.match.params.id + index);
    }

    scrollTo(id) {
        this.itemRefs[id].scrollIntoView({ block: "start", behavior: "auto" });
    }

    getValueOptional(content, value) {
        if (Object.keys(content[value]['params']['optional']).length > 0) {
            return (
                <React.Fragment>
                    <h5 className="ui header" style={marginTopBot}>Optional:</h5>
                    {Object.keys(content[value]['params']['optional']).map(value2 => {
                        return <p style={{ marginLeft: '30px' }}>{value2}: {content[value]['params']['optional'][value2]}</p>
                    })}
                </React.Fragment>
            )
        }
    }

    getValueRequired(content, value) {
        if (Object.keys(content[value]['params']['required']).length > 0) {
            return (
                <React.Fragment>
                    <h5 className="ui header" style={marginTopBot}>Required:</h5>
                    {Object.keys(content[value]['params']['required']).map(value2 => {
                        return <p style={{ marginLeft: '30px' }}>{value2}: {content[value]['params']['required'][value2]}</p>
                    })}
                </React.Fragment>
            );
        }
    }

    render() {
        let content = jsonData[this.props.match.params.id];
        if (content == null) {
            return <p>Loading...This content haven't published yet</p>
        }
        let lists = Object.keys(content).map((value, index) => {
            return (
                <div key={index} ref={el => (this.itemRefs[this.props.match.params.id + index] = el)} style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <h3 className="ui header" style={marginTopBot}>{value}</h3>
                    <p>{content[value]['explain']}</p>
                    {this.getValueRequired(content,value)}
                    {this.getValueOptional(content, value)}
                    {/* <h5 className="ui header" style={marginTopBot}>Optional:</h5>
                    {Object.keys(content[value]['params']['optional']).map(value2 => {
                        return <p style={{ marginLeft: '30px' }}>{value2}: {content[value]['params']['optional'][value2]}</p>
                    })} */}
                    <h5 className="ui header" style={marginTopBot}>Returns: {content[value]['returns']}</h5>
                    {/* <h4>Explain: {content[value]['explain']}</h4> */}
                    <h5 className="ui header" style={marginTopBot}>Example:</h5>
                    <p style={codeXMLCss}>{content[value]['example']}</p>
                    <hr></hr>
                </div>
            );
        })
        return (
            <div className="main ui" >
                {lists}
            </div>
        );
    }
}
