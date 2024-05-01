import axios, { AxiosResponse } from "axios";
import { Video } from "../models/video";

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}


axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})
    

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),

}

const videos = {
    list: () => requests.get<Video[]>('/videos'),
    details: (id: string) => requests.get<Video>(`/videos/${id}`),
    create: (video: Video) => requests.post<void>('/videos', video),
    update: (video: Video) => requests.put<void>(`/videos/${video.id}`, video),
    delete: (id: string) => requests.del<void>(`/videos/${id}`)
}

const agent = {
    videos
}

export default agent;