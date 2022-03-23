import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list.jsx';
import SearchHeader from './components/search_header/search_header.jsx';
import styles from './app.module.css';

function App({ youtube }) {

  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query)
      .then(videos => setVideos(videos))
  }

  useEffect(() => { // component가 mount or update 될때마다 callback 함수 실행
    youtube
      .mostPopular()
      .then(videos => setVideos(videos))
  },[]);
  
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos} />
    </div>
  )
}

export default App;