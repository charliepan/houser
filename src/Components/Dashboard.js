import React, { Component } from 'react'
import House from './House';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
        super();
        this.state={
            houses:[]
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount(){
        this.getHouses();
    }

    getHouses = () =>{
        axios.get('/api/houses').then(res => { 
            console.log(res.data);
            this.setState({houses: res.data})
        })
        .catch(err=> console.log(err));
    }

    deleteHouse (id){
        axios.delete(`/api/houses/${id}`).then((res)=>{
            this.getHouses();
            console.log(res.data);
        })
        .catch(err=> console.log(err));
    }

    render() {
        const houses = this.state.houses.map((house, i) =>{
            return(
                <House key={i} house={house} deleteHouse={this.deleteHouse}/>
            )
        })
        return (
            <div>
                <Link to='/wizard'>
                    <button>Add New Property</button>
                </Link>
                <div>{houses}</div>
            </div>
        )
    }
}
