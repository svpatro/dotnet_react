import { useEffect, useState } from 'react';
import axios from 'axios';
import { Video } from '../Models/video';
import NavBar from './NavBar';

function App() {
  const [videos, setVideos] = useState<Video[]>([]);

  // UseEffect is a React Hook that allows us to sync a component with an external system
  // Axios is an HTTP client for node.js and the browser (it is "isomorphic")

  useEffect(() => {
    axios.get<Video[]>('http://localhost:5000/api/videos')
      .then(response => {
        setVideos(response.data)
      })
  }, [])

  return (
    <div>
      <NavBar/>
      <ul>
        {videos.map((video: any) => (
          <li key={video.id}>
            {video.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
