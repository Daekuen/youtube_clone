import React from 'react';
import VideoItem from '../video_item/video_item.jsx';
import styles from './video_list.module.css'

const VideoList = ({ videos }) => {

  return (
    <ul className={styles.videos}>
      {videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}/>
      })}
    </ul>
  );
}

export default VideoList;