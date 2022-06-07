import axios from 'axios'


export default axios.create({
    baseURL: 'https://serene-plateau-63899.herokuapp.com/api',
    headers: {

        'Content-type': 'application/json'
    }
})