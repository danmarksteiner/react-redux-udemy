import axios from 'axios';

const KEY = 'AIzaSyB01qIMgFVmUbLimzV9aCGC-uPT-hbUC8Q';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY
   }
});