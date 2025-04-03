import axios from 'axios'

const baseUrlPhoneBackendUniversal = "http://192.168.2.49:5001/api"
const baseUrlAndroidBackendUniversal = "http://10.0.2.2:5001/api"
const baseUrlRenderBackendUniversal = "https://backend-universal.onrender.com/api"


const baseUrlPhone = "http://192.168.2.49:3000/"
const baseUrlAndroid = "http://10.0.2.2:3000/"

const baseUrlRender = "https://chat-api-uf32.onrender.com/"

const baseUrlSwagger = "https://chat-api-uf32.onrender.com/api-docs/" //Swagger




const myAxios = axios.create({
    baseURL : baseUrlAndroid,
    headers: {
        "Content-Type":"application/json",
    },
    withCredentials: true
})

export { myAxios }