import { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Video } from "../../../app/models/video";

//Form for updating video input stuff

interface Props {
    Video: Video | undefined;
    closeForm: () => void;
    createOrEdit: (video: Video) => void;
    submitting: boolean;
}

export default function VideoForm({Video: selectedVideo, closeForm, createOrEdit, submitting}: Props) {

    const initialState = selectedVideo ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        Rating: '',
        Tags: '',
        Visibility: '',
        filePath: '',
    }

    const [Video, setVideo] = useState(initialState);

    function handleSubmit() {
        createOrEdit(Video);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setVideo({...Video, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={Video.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='Description' value={Video.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder='Category' value={Video.category} name='category' onChange={handleInputChange} />
                <Form.Input type='date' placeholder='Date' value={Video.date} name='date' onChange={handleInputChange} />
                <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}