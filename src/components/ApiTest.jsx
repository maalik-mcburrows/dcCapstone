import React, { Component } from 'react'

class ApiTest extends Component {

    state = { 
        apiResponse: "" 
    }
    
    callAPI = async() => {
        const apiFetch = await fetch("http://localhost:9000/test")
        const response = await apiFetch.text();
        this.setState({ 
            apiResponse: response 
        });
    }
    
    componentDidMount() {
        this.callAPI();
    }

    render() {
        const { apiResponse } = this.state
        return (
            <div>
                <p>{apiResponse}</p>
            </div>
        )
    }
}

export default ApiTest;