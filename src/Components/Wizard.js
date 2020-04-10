import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component {
    constructor(){
        super()
        this.state={
            housename:'',
            address:'',
            city:'',
            state:'',
            zip: 0,
            complete: false
        }
    }

    handleChange = (target) =>{
        const { name, value} = target
        this.setState({[name]: value});
    }

    handleClick = () =>{
        const { housename, address, city, state, zip} = this.state;
        axios.post('/api/houses', {housename, address, city, state, zip})
             .then((res) =>{
                 console.log(res.data)
                this.setState(
                    {
                        housename:'',
                        address:'',
                        city:'',
                        state:'',
                        zip: 0,
                        complete: true,
                    }
                )
             })

    }

    render() {
        const { housename, address, city, state, zip, complete } = this.state;

        if(complete === true){
            this.setState({complete:false})
            return <Redirect to='/'></Redirect>
        }

        return (
            <div>
                <p>Property Name</p>
                <input onChange={e => this.handleChange(e.target)} value={housename} name='housename' type="text"/>
                <p>Address</p>
                <input onChange={e => this.handleChange(e.target)} value={address} name='address' type="text"/>
                <p>City</p>
                <input onChange={e => this.handleChange(e.target)} value={city} name='city' type="text"/>
                <span>State</span>
                <input onChange={e => this.handleChange(e.target)} value={state} name='state' type="text"/>
                <span>Zip</span>
                <input onChange={e => this.handleChange(e.target)} value={zip} name='zip' type="text"/>
                <button onClick={this.handleClick}>Complete</button>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}
