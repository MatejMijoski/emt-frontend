import {Box, Button, Checkbox, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import BookService from "../../service/BookService";
import {useEffect, useState} from "react";
import BookFormModal from "./components/BookFormModal";

const rows = [
    {
        name: "test",
        availableCopies: 2,
        author: "test",
        category: 'test',
    }
]

const Books = () => {
    const [books, setBooks] = useState([])
    const [open, setOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);


    useEffect(() => {
        BookService.getBooks()
            .then((items) => setBooks(items))
    }, [])

    const handleEdit = (bookData) => {
        if (bookData) {
            BookService.editBook(bookData.id, bookData)
                .then((data) => {
                    console.log(data)
                    setBooks(books.map((item) => {
                        if (item.id === bookData.id) {
                            return data;
                        }
                        return item;
                    }))
                })
        }
    }

    const handleRentBook = (id) => {
        BookService.rentBook(id)
            .then((data) => {
                if (data) {
                    setBooks(books.map((item) => {
                        if (item.id === id) {
                            return data;
                        }
                        return item;
                    }))
                }
            })
    }

    const handleDelete = (id) => {
        BookService.deleteBook(id)
            .then(() => {
                setBooks(books.filter((item) => item.id !== id))
            })
    }

    return (
        <Box>
            <TableContainer component={Paper}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Author</TableCell>
                        <TableCell align="right">Available Copies</TableCell>
                        <TableCell align="right">Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.author.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.availableCopies}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.category}
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => {
                                    setOpen(!open);
                                    setSelectedBook(row);
                                }}>Edit</Button>
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => handleDelete(row.id)}>Delete</Button>
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => handleRentBook(row.id)}>Mark as Taken</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableContainer>
            <BookFormModal open={open} setOpen={setOpen} data={selectedBook} handleEditBook={handleEdit} />
        </Box>
    )
}

export default Books;