import axios from 'axios'

const baseUrlPhone = "http://192.168.2.49:5001/api"
const baseUrlAndroid = "http://10.0.2.2:5001/api"




const myAxios = axios.create({
    baseURL : baseUrlAndroid,
    headers: {
        "Content-Type":"application/json",
    },
    withCredentials: true
})

export { myAxios }