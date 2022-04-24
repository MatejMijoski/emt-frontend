import {Box, Container, CssBaseline, AppBar, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const DefaultLayout = ({ Children }) => {
    const history = useNavigate();

    return (
        <Container
            style={{
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position='fixed'>
                    <Box>
                        <Button style={{ color: 'white'}} onClick={() => history("/books")}>Books</Button>
                        <Button style={{ color: 'white'}} onClick={() => history("/categories")}>Categories</Button>
                    </Box>
                </AppBar>
                <Box
                    component='main'
                    sx={{
                        flexGrow: 1,
                        p: 3,
                    }}
                >
                    <Children />
                </Box>
            </Box>
        </Container>
    );
};

export default DefaultLayout;