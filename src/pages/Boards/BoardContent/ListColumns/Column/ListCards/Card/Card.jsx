import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Card as MuiCard} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';

const Card = ({ temporaryHideMedia}) => {
    if ( temporaryHideMedia ) {
return (
    <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
    }}>
        <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
            <Typography>Card test 01</Typography>
        </CardContent>
    </MuiCard>
)
    }
    return (
        <MuiCard sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
            overflow: 'unset'
        }}>
            <CardMedia
                sx={{height: 140}}
                image="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/315211595_694703232014421_5599911052542289139_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=8UMZw0PxOX4AX92h_Py&_nc_ht=scontent.fhan14-1.fna&oh=00_AfBCpqa9kUa_RQbGIOxlQWUpTir-qp0X-AI_4Kn8eNEOcA&oe=65A3C7E8"
                title="green iguana"
            />
            <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
                <Typography>DatDev</Typography>
            </CardContent>
            <CardActions sx={{p: '0 4px 8px 4px'}}>
                <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
            </CardActions>
        </MuiCard>
    );
};

export default Card;