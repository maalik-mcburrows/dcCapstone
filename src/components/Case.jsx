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
            <div className="case">
                <div className="caseTitle">
                    <h1>Have you tested positive for <span style={{color: "red"}}>COVID-19</span>? Please file an <span style={{color: "red"}}>anonymous</span> case report below.</h1>
                </div>
                <form className="caseForm" onSubmit={this.handleSubmit}>
                    <div style={{paddingRight: "10px"}}>
                        <input placeholder="Test Date" style={{borderRadius: "10px", textAlign: "right"}} type="date" name="test_date" value={test_date} onChange={this.handleChange} />
                    </div>
                    <div style={{paddingRight: "10px"}}>
                        <input placeholder="State" style={{borderRadius: "10px", textAlign: "center"}} type="text" name="state" value={state} onChange={this.handleChange} />
                    </div>
                    <div style={{paddingRight: "10px"}}>
                        <input placeholder="Testing Location" style={{borderRadius: "10px", textAlign: "center"}} type="text" name="testing_site" value={testing_site} onChange={this.handleChange} />
                    </div>
                    <button style={{borderRadius: "10px"}} type="submit"> SUBMIT </button>
                </form>  
            </div>
        )
    }
}

export default Case;