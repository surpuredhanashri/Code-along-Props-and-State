import React, { Component } from 'react'
import DisplayComponent from "../view/DisplayComponent"

class DataComponent extends Component {
    constructor(){
        super();
        this.state = {
            persons:[
                {name:"Prograd", age:5},
                {name:"Prograd-jr", age:15},
                {name:"Face", age:25},
            ]
        }
    }

    render() {
        return (
            <>
            <DisplayComponent person={this.state.persons}/>

            </>
        )
    }
}

export default DataComponent;