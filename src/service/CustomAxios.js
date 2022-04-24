import axios from "axios";
import {toast} from "react-toastify";


const instance = axios.create({
    responseType: "json",
    baseURL: process.env.BACKEND_URL || "http://127.0.0.1:5000/api",
    timeout: 5000,
    validateStatus: status => {
        if (status >= 500) {
            toast.error("Internal Server Error. Please try again later.")
        }
        return true;
    }
})

export default instance;