import {Box, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useEffect, useState} from "react";
import CategoryService from "../../service/CategoryService";


const Categores = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoryService.getCategories()
            .then((resp) => setCategories(resp));
    }, [])

    return (
        <Box>
            <TableContainer component={Paper}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.map((row) => (
                        <TableRow key={row}>
                            <TableCell component="th" scope="row">
                                {row}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableContainer>
        </Box>
    )
}

export default Categores;