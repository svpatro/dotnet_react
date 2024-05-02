import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Image } from 'semantic-ui-react';
import { Video } from '../../../app/models/video';

//this has the potential to be a comment, tag, rate function instead of the activities details idea

interface Props {
    video: Video;
    cancelSelectvideo: () => void;
    openForm: (id: string) => void;
}

export default function videoDetails({ video, cancelSelectvideo, openForm }: Props){
    return(
        <Card fluid>
        <video controls src={`${video.filePath}`} />
        <CardContent>
          <CardHeader>{video.title}</CardHeader>
          <CardMeta>
            <span>{video.date}</span>
          </CardMeta>
          <CardDescription>
            {video.description}
          </CardDescription>
        </CardContent>
        <CardContent extra>
            <Button.Group widths='2'>
                <Button onClick={() => openForm(video.id)} basic color='blue' content='Edit' />
                <Button onClick={cancelSelectvideo} basic color='grey' content='Cancel' />
            </Button.Group>
        </CardContent>
      </Card>
    )
}