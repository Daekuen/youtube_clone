import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list.jsx';
import SearchHeader from './components/search_header/search_header.jsx';
import styles from './app.module.css';

function App() {

  const [videos, setVideos] = useState([]);

  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAvsAGN6YfAulRjSuvk2JLqbT-EDRPWu4g`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }

  useEffect(() => { // component가 mount or update 될때마다 callback 함수 실행
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAvsAGN6YfAulRjSuvk2JLqbT-EDRPWu4g",
          requestOptions
        )
      .then(response => response.json()) // json으로 변환
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);
  
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos} />
    </div>
  )
}

export default App;