import axios from 'axios';

const KEY ='AIzaSyDJ16hE3o7oI-IpvpTe5l5obTAVV8r9YW4';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY,
        
    }
})


//read youtube api search docs, it will show how you can make request. 