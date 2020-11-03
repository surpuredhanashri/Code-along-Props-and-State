import React, { Component } from 'react';

class DisplayComponent extends Component {
    constructor (props){
        super(props);                                                                                                                                                                                                                               
        this.state={
            persons : this.props.persons || []
        }
    }
    renderOutput=()=>{
        console.log(this.state.persons);
        const data = this.state.persons;
        const mapRows = data.map(persons =>
            <React.Fragment key={persons.name}>
                <p>
                    <span>
                        Name :{persons.name}
                    </span>
                    <span>
                        age :{persons.age}
                    </span>
                </p>
            </React.Fragment>
            )
        return mapRows;
    }

    switchHandler = () =>{
        console.log("clcil me")
        this.setState(
            {
                persons:[
                    {name:"face", age:11},
                    {name:"upksilly", age:91},
                    {name:"faceprep", age:19},
                ]
            }
        )
    }

    render() {
        return (
            <div>
                {this.renderOutput()}
                < button onClick={this.switchHandler}>Switch</button>
            </div>
        )
    }
}
export default DisplayComponent;