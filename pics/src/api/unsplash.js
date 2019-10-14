import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ba6af6bd191f23c0e1e5f258aba82eedeaf43b983b9cad61cde6d30db54aad95'
    }
});