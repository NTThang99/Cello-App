import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import AppBar from "../../components/AppBar";



const Board = () => {
    return (
        <Container disableGutters maxWidth={false} sx={{height: '100vh'}}>
            <AppBar/>
            <Box sx={{
                backgroundColor: 'primary.dark',
                width: '100%',
                height: (them) => them.trello.boardBarHeight,
                display: 'flex',
                alignItems: 'center',
            }}>
                Board Bar
            </Box>
            <Box sx={{
                backgroundColor: 'primary.main',
                width: '100%',
                height: (them) => `calc(100vh - ${them.trello.appBarHeight} - ${them.trello.boardBarHeight})`,
                display: 'flex',
                alignItems: 'center',
            }}>
                Board Content
            </Box>
        </Container>
    );
};

export default Board;