import axios from 'axios';
const KEY = 'AIzaSyBUbYtV6QHapaxWG9mS8DQ-sGH5IKgUvkI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})