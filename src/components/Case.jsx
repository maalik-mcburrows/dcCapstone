import React, { Component } from 'react'
import axios from 'axios';

class Case extends Component {

    state = { 
        test_date: "",
        testing_site: "",
        state: "" 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        const url = 'http://localhost:9000/case';
        axios.post(url,data)
        .then(response=>console.log(response))
        .catch(e=>console.log(e))
    }

    render() {
        const { test_date, testing_site, state } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="test_date" value={test_date} onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="text" name="testing_site" value={testing_site} onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="text" name="state" value={state} onChange={this.handleChange} />
                    </div>
                    <button type="submit"> SUBMIT </button>
                </form>  
            </div>
        )
    }
}

export default Case;