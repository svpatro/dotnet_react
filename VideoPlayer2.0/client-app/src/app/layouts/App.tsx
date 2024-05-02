import { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react';
import { Video } from '../models/video';
import NavBar from './navbar';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponents';
import VideoDashboard from '../../features/videos/dashboard/VideoDashboard';

function App() {

  const [videos, setvideos] = useState<Video[]>([]);
  const [selectedvideo, setSelectedvideo] = useState<Video | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.videos.list().then((response: any[]) => {
      let videos: Video[] = [];
      response.forEach(video => {
        video.date = video.date.split('T')[0];
        videos.push(video); 
      })
      setvideos(videos);
      setLoading(false);
      })
  }, [])

  function handleSelectedvideo(id: String) {
    setSelectedvideo(videos.find(x => x.id === id))
  }

  function handleCancelSelectvideo() {
    setSelectedvideo(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectedvideo(id) : handleCancelSelectvideo();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleDeletevideo(id: string) {
    setSubmitting(true);
    agent.videos.delete(id).then(() => {
      setSubmitting(false);
    })
    setvideos([...videos.filter(x => x.id !== id)])
  }

  function handleCreateOrEditvideo(video: Video) {
    setSubmitting(true);
    if (video.id) {
      agent.videos.update(video).then(() => {
        setvideos([...videos.filter(x => x.id !== video.id), video])
        setSelectedvideo(video);
        setEditMode(false);
        setSubmitting(false);
      })
    } else {
      video.id = uuid();
      agent.videos.create(video).then(() => {
        setvideos([...videos, video])
        setSelectedvideo(video);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }

  if (loading) return <LoadingComponent content='Loaderizating'/>

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{marginTop: '7em'}}>
        <VideoDashboard 
          videos={videos}
          selectedvideo={selectedvideo}
          selectvideo={handleSelectedvideo}
          cancelSelectvideo={handleCancelSelectvideo}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditvideo}
          deletevideo={handleDeletevideo}
          submitting={submitting}
        />
      </Container>

    </>
  )
}

export default App
