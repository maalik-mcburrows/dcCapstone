import React, { Component } from 'react';

const API = 'AIzaSyCF6-Gp5GftHubZ6danNcSYQATv47ZtDS0'
const playlistId = 'PLvrp9iOILTQaJa78zFQ0QgvShQ2HEwHxP'
const maxResults = 10;
<<<<<<< HEAD
// const whoChannelId = 'UC07-dOwgza1IguKA86jqxNA'

const cdcURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${API}`
// const whoURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${whoChannelId}&part=snippet,id&order=date&maxResults=${maxResults}`
=======
const cdcURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${API}`
>>>>>>> e330238146fb6dd536f3befc5e33738646942152

class Youtube extends Component {

    state = {
        ytResults: []
    }

    componentDidMount = async() => {
        const response = await fetch(cdcURL);
        const data = await response.json();
        const ytResults = data.items.map(vid => 'https://www.youtube.com/embed/' + vid.snippet.resourceId.videoId)
        this.setState({
            ytResults
        })
        return ytResults;
    }

    render() {
        const { ytResults } = this.state
        return (
            <div>   
                <div className="youtube">
                    {ytResults.map((link, i) => {
                            var frame = <div key={i}><iframe title= "iframe" width="360" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br></br><br></br></div>
                            return frame;
                        })}
                    {this.frame}               
                </div>
            </div>              
        )
    }
}

export default Youtube;