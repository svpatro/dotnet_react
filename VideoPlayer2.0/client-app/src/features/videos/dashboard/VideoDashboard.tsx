import { Grid } from "semantic-ui-react";
import { Video } from "../../../app/models/video";
import VideoList from "./VideoList.tsx";
import VideoDetails from "../details/VideoDetails.tsx";
import VideoForm from "../form/VideoForm.tsx";

interface Props {
    videos: Video[];
    selectedvideo: Video | undefined;
    selectvideo: (id: string) => void;
    cancelSelectvideo: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (video: Video) => void;
    deletevideo: (id: string) => void;
    submitting: boolean;
}

export default function videoDashboard({videos, selectvideo, selectedvideo, 
    cancelSelectvideo, editMode, openForm, 
    closeForm, createOrEdit, deletevideo, submitting}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <VideoList 
                    videos={videos} 
                    selectvideo={selectvideo} 
                    cancelSelectvideo={cancelSelectvideo} 
                    deletevideo={deletevideo}
                    selectedvideo={selectedvideo}
                    submitting={submitting}
                    />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedvideo && !editMode &&
                <VideoDetails 
                    video={selectedvideo} 
                    cancelSelectvideo={cancelSelectvideo}
                    openForm={openForm}
                 />}
                 {editMode &&
                <VideoForm 
                    closeForm={closeForm} 
                    Video={selectedvideo} 
                    createOrEdit={createOrEdit} 
                    submitting={submitting}    
                />}
            </Grid.Column>
        </Grid>
    )

}