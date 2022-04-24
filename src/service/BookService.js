import axios from './CustomAxios';
import {toast} from "react-toastify";

class BookService {

    getBooks() {
        return axios.get("/books")
            .then((resp) => resp.data)
    }

    editBook(id, data) {
        return axios.put(`/books/${id}`, data)
            .then((resp) => resp.data)
    }

    rentBook(id) {
        return axios.get(`/books/${id}/rent`)
            .then((resp) => {
                console.log(resp)
                console.log(resp.status)
                if (resp.status === 400) {
                    toast.error("The book has no available copies.")
                    return null;
                } else {
                    return resp.data;
                }
            })
    }

    deleteBook(id) {
        return axios.delete(`/books/${id}`)
    }
}

export default new BookService();