import React, { Component } from 'react'
import axios from 'axios';

class Case extends Component {

    state = { 
        test_date: "",
        testing_site: [],
        state: "alabama" 
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
            state: event.target.value
        }); 
        this.getTestingSites(event.target.value);
    }

    async componentDidMount() {
        this.getTestingSites(this.state.state);
    }

    getTestingSites = async(stateName) => {
        const testSiteUrl = await fetch(`https://covid-19-testing.github.io/locations/${stateName.toLowerCase()}/complete.json`);
        const response = await testSiteUrl.json();
        const siteNames = [];
        const sites = response.map(site => {
            return siteNames.push(site.name);
        });
        console.log(siteNames);
        this.setState({
            testing_site : siteNames
        })
        // console.log('test site =>', sites);
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
                        <select onChange={this.handleChange}>
                            {testing_site.map(site => (
                                <option placeholder="Testing Location" style={{borderRadius: "10px", textAlign: "center"}} name="testing_site" value={site} >{site}</option>
                            ))}
                        </select>
                    </div>
                    <button style={{borderRadius: "10px"}} type="submit"> SUBMIT </button>
                </form>  
            </div>
        )
    }
}

export default Case;