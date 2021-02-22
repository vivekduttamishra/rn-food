import axios from 'axios';
import config from '../config.json'
//

const request= axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: `Bearer ${config.yelp_key}`
    }
});

export default request;

//