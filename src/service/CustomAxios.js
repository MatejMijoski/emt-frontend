import axios from "axios";
import {toast} from "react-toastify";


const instance = axios.create({
    responseType: "json",
    baseURL: "https://emt-backend1.herokuapp.com/api",
    timeout: 5000,
    validateStatus: status => {
        if (status >= 500) {
            toast.error("Internal Server Error. Please try again later.")
        }
        return true;
    }
})

export default instance;