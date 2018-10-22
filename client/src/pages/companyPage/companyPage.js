import React, { Component } from 'react';


export default class CompanyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
       let {name} = this.props.match.params;
        return(
            <div>
                {JSON.stringify(name)}
            </div>
        );
    }



}