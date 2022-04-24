import {Button, Dialog, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useEffect, useState} from "react";

const BookFomModal = ({ open, setOpen, data, handleEditBook }) => {
    const [bookData, setBookData] = useState(null)

    useEffect(() => setBookData(data), [data]);

    const handleEdit = () => {
        handleEditBook(bookData)
    }

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(!open)}
        >
            <DialogTitle>Edit book {bookData?.name}</DialogTitle>
            <DialogContent>
                <TextField
                    label='Name'
                    fullWidth
                    value={bookData?.name}
                    onChange={(e) => setBookData({ ...bookData, name: e.target.value })}
                />
                <TextField
                    label='Category'
                    fullWidth
                    value={bookData?.category}
                    onChange={(e) => setBookData({ ...bookData, name: e.target.value })}
                />
                <Button onClick={handleEdit}>Submit</Button>
            </DialogContent>
        </Dialog>

    )
}

export default BookFomModal;