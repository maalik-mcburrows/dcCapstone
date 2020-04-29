import React, { Component } from 'react'

class Case extends Component {

    state = { 
        test_date: "",
        test_location: "",
        state: "" 
    }
    
    postCase = async() => {
        const apiFetch = await fetch("http://localhost:9000/case")
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
                <form>
                    <div>
                        <input type="text" name="test_date" />
                    </div>
                    <div>
                        <input type="text" name="test_location" />
                    </div>
                    <div>
                        <input type="text" name="state" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Case;