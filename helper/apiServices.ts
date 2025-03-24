import axios from 'axios'

const baseUrl = "http://192.168.2.49:5001/api"

const myAxios = axios.create({
    baseURL : baseUrl,
    headers: {
        "Content-Type":"application/json",
    },
    withCredentials: true
})

export { myAxios }