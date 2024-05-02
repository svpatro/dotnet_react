import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Video } from "../../../app/models/video";
import { useState } from "react";

interface Props {
    videos: Video[];
    selectedvideo: Video | undefined;
    selectvideo: (id: string) => void;
    cancelSelectvideo: () => void;
    deletevideo: (id: string) => void;
    submitting: boolean;
}

export default function videoList({videos, selectvideo, deletevideo, submitting}: Props) {
    const [target, setTarget] = useState('');

    function handlevideoDelete(e: React.SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deletevideo(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                {videos.map(video => (
                    <Item key={video.id}>
                        <Item.Content>
                            <Item.Header as='a'>{video.title}</Item.Header>
                            <Item.Meta>{video.date}</Item.Meta>
                            <Item.Description>
                            <div>{video.description}</div>
                            <div>{video.Rating}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectvideo(video.id)} floated="right" content="View" color="blue" />
                                <Button 
                                    loading={submitting && target === video.id} 
                                    onClick={(e) => handlevideoDelete(e, video.id)} 
                                    floated="right" 
                                    content="Delete" 
                                    color="red" 
                                    name={video.id}
                                />
                                <Label basic content={video.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}