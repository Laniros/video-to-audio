import React from 'react';
import Button from 'react-bootstrap/Button'

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Search for a video to convert</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
                <Button >Click Me</Button>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>

            </div>
        </div>

    )
}

export default VideoDetail;