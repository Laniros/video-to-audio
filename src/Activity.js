import * as React from 'react'
import youtube from './youtube'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

class Activity extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <Container style={{marginTop: 20}}>

                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        
                        </div>
                        <div >
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        
                        
                    </div>
                </div>
        
            </Container>
        )
    }
}

export default Activity;