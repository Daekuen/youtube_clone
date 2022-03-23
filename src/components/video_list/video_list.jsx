import React from 'react';
import VideoItem from '../video_item/video_item.jsx';

const VideoList = ({ videos }) => {

  return (
    <ul>
      {videos.map((video) => {
        console.log(video.snippet)
        
        return <VideoItem key={video.id.videoId} video={video}/>
      })}
    </ul>
  );
}

export default VideoList;