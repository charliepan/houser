import React, { Component } from 'react'

export default class House extends Component {
    constructor(){
        super();
        // console.log(this.props.house);
        // this.state ={
        //     deleted: false
        // }
    }

    render() {
        const { id, housename, address, city, state, zip } = this.props.house;
        console.log(id, housename, address, city, state, zip);
        return (
            <div key={id}>
                <p>Property Name: {housename}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
                <button onClick={() => this.props.deleteHouse(id)}>Delete</button>
            </div>
        )
    }
}
