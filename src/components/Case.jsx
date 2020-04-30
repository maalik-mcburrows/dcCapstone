import React, { Component } from 'react'
import axios from 'axios';

class Case extends Component {

    state = { 
        test_date: "",
        testing_site: [],
        state: "georgia" 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(this.state)
        console.log('state - ', this.state.state)
    }

    stateHandleChange = (event) => {
        this.setState({
            testing_site: this.getTestingSites(),
            state: event.target.value
        }); 
    }

    // stateOnChange = () => {
    //     this.setState({
    //         state : this.stateHandleChange()
    //     })    
    //     console.log(this.state.state)    
    // }

    async componentDidMount() {
        this.getTestingSites();
    }

    getTestingSites = async() => {
        // const state = this.state.state
        // const lowerState = state.toLowerCase();
        const testSiteUrl = await fetch(`https://covid-19-testing.github.io/locations/${this.state.state.toLowerCase()}/complete.json`);
        const response = await testSiteUrl.json();
        const sites = response.map(site => {
            return site.name
        })
        // console.log('test site =>', sites);
        // return response;
        this.setState({
            testing_site : sites
        }, function () {
            console.log('current sites in state: ', this.state.testing_site)
        })
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

        const stateOptions = ['Alabama' , 'Alaska' , 'Arizona' , 'Arkansas' , 'California' , 'Colorado' , 'Connecticut' , 'Delaware' , 'Florida' , 'Georgia' , 
        'Hawaii' , 'Idaho', 'Illinois', 'Indiana', 'Iowa' , 'Kansas' , 'Kentucky' , 'Louisiana' , 'Maine' , 'Maryland', 'Massachusetts' , 'Michigan' , 'Minnesota' , 'Mississippi', 'Missouri',
        'Montana' , 'Nebraska' , 'Nevada' , 'New Hampshire' , 'New Jersey' , 'New Mexico' , 'New York' , 'North Carolina' , 'North Dakota' , 'Ohio', 'Oklahoma' , 'Oregon' , 'Pennsylvania' , 'Rhode Island' , 'South Carolina', 
        'South Dakota' , 'Tennessee' , 'Texas' , 'Utah' , 'Vermont' , 'Virginia' , 'Washington' , 'West Virginia' , 'Wisconsin' , 'Wyoming' ]

        const { test_date, testing_site } = this.state
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
                        {/* <input placeholder="State" style={{borderRadius: "10px", textAlign: "center"}} type="text" name="state" value={state} onChange={this.handleChange} /> */}
                        <select onChange={this.stateHandleChange}>
                            {stateOptions.map((stateOption, index) => (
                                <option placeholder="State" style={{borderRadius: "10px", textAlign: "center"}} key={index} value={stateOption} name="state" >{stateOption}</option>
                            ))}
                        </select>
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