  
import React from 'react';
import VideoItem from './VideoItem';
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect}/>

    });

    return <div className='listt'>{renderedVideos ? renderedVideos : ''}<br/></div>;
};
export default VideoList;