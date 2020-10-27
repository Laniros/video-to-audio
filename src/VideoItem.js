import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { Row } from 'react-bootstrap';
const VideoItem = ({video , handleVideoSelect}) => {
    return (
<div>
    <Row>
        <Col xs={10}><div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
        <img className='img' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div >{video.snippet.title}</div>
    </div></Col>

 <Col ><Button style={{alignItems: "center", marginTop: 80}}>Convert to MP3</Button></Col>
 </Row>
 </div>
    )
};
export default VideoItem;