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

    componentDidMount = async () => {
        this.getTestingSites(this.state.state);
    }

    onSiteChange = (event) => {
        this.setState({
            testing_site : [event.target.value]
        })
        console.log(this.state.testing_site)
    }

    getTestingSites = async(stateName) => {
        const testSiteUrl = await fetch(`https://covid-19-testing.github.io/locations/${stateName.toLowerCase()}/complete.json`);
        const response = await testSiteUrl.json();
        const siteNames = [];
        response.map(site => {
            return siteNames.push(site.name);
        });
        console.log(siteNames);
        this.setState({
            testing_site : siteNames
        });
        // console.log('test site =>', sites);
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(data);
        // const url = 'http://localhost:9000/case';
        // axios.post(url,data)
        // .then(response=>console.log(response))
        // .catch(e=>console.log(e))
    }

    render() {

        const stateOptions = ['Alabama' , 'Alaska' , 'Arizona' , 'Arkansas' , 'California' , 'Colorado' , 'Connecticut' , 'Delaware' , 'Florida' , 'Georgia' , 
        'Hawaii' , 'Idaho', 'Illinois', 'Indiana', 'Iowa' , 'Kansas' , 'Kentucky' , 'Louisiana' , 'Maine' , 'Maryland', 'Massachusetts' , 'Michigan' , 'Minnesota' , 'Mississippi', 'Missouri',
        'Montana' , 'Nebraska' , 'Nevada' , 'New-Hampshire' , 'New-Jersey' , 'New-Mexico' , 'New-York' , 'North-Carolina' , 'North-Dakota' , 'Ohio', 'Oklahoma' , 'Oregon' , 'Pennsylvania', 'South-Carolina', 
        'Tennessee' , 'Texas' , 'Utah' , 'Vermont' , 'Virginia' , 'Washington' , 'West-Virginia' , 'Wisconsin' , 'Wyoming' ]

        let { test_date, testing_site } = this.state
        console.log('this the sites', testing_site);
        return (
            <div className="case">
                <div className="caseTitle">
                    <h1>Have you tested positive for <span style={{color: "red"}}>COVID-19</span>? Please file an <span style={{color: "red"}}>anonymous</span> case report below.</h1>
                </div>
                <form className="caseForm" onSubmit={this.handleSubmit}>
                    <div className="caseInputLabel">TEST DATE : 
                        <div className="caseInputDiv">
                            <input className="inputElement"  style={{ borderRadius: "15px", textAlign: "right", fontStyle: "normal", fontFamily: "sans-serif", color: "black" }} type="date" name="test_date" value={test_date} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="caseInputLabel">STATE :
                        <div className="caseInputDiv">
                            {/* <input placeholder="State" style={{borderRadius: "10px", textAlign: "center"}} type="text" name="state" value={state} onChange={this.handleChange} /> */}
                            <select className="inputElement"  style={{borderRadius: "10px", textAlign: "center", padding: "2.5px"}} onChange={this.stateHandleChange}>
                                {stateOptions.map((stateOption, index) => (
                                    <option key={index} value={stateOption} name="state" >{stateOption}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="caseInputLabel">TEST SITE :
                        <div className="caseInputDiv">
                            <select className="inputElement" style={{borderRadius: "10px", textAlign: "center", padding: "2.5px"}} onChange={this.onSiteChange}>
                                {testing_site.map((site, index) => (
                                    <option key={index} name="testing_site" value={site} >{site}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div id="caseButtDiv" className="caseInputDiv">
                        <button className="caseInputButt" type="submit"> <b>SUBMIT</b> </button>
                    </div>
                </form>  
            </div>
        )
    }
}

export default Case;

