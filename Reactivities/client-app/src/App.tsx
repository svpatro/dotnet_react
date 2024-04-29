import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);

  // UseEffect is a React Hook that allows us to sync a component with an external system
  // Axios is an HTTP client for node.js and the browser (it is "isomorphic")

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      })
  }, [])

  return (
    <div>
      <h1>Reactivities</h1>
      <ul>
        {activities.map((activity: any) => (
          <li key={activity.id}>
            {activity.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
