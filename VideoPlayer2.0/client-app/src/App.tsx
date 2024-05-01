import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [videos, setVideos] = useState([]);

  // UseEffect is a React Hook that allows us to sync a component with an external system
  // Axios is an HTTP client for node.js and the browser (it is "isomorphic")

  useEffect(() => {
    axios.get('http://localhost:5000/api/videos')
      .then(response => {
        setVideos(response.data)
      })
  }, [])

  return (
    <div>
      <h1>Reactivities</h1>
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
