import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <Container fluid="md">
  <Row>

        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='img' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='col-5'>
                <div className='header '>{video.snippet.title}</div>
                <Button >Click Me</Button>

            </div>
           
        </div>
        </Row>
</Container>
        
    )
};
export default VideoItem;