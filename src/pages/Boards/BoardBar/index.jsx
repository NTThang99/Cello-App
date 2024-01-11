import React from 'react';
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const MENU_STYLES = {
    color: 'white',
    bgcolor: 'transparent',
    border: 'none',
    paddingX: '5px',
    borderRadius: '4px',
    '.MuiSvgIcon-root': {
        color: 'white'
    },
    '&:hover': {
        bgcolor: 'primary.50'
    }
}

function BoardBar() {
    return (
        <Box sx={{
            width: '100%',
            height: (them) => them.trello.boardBarHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            paddingX: 2,
            overflowX: 'auto',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
            borderBottom: '1px solid white'

        }}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                <Chip
                    sx={MENU_STYLES}
                    icon={<DashboardIcon/>}
                    label="With Icon"
                    clickable
                />
                <Chip
                    sx={MENU_STYLES}
                    icon={<VpnLockIcon/>}
                    label="Public/Private Workspace"
                    clickable
                />
                <Chip
                    sx={MENU_STYLES}
                    icon={<AddToDriveIcon/>}
                    label="Add To Google Drive"
                    clickable
                />
                <Chip
                    sx={MENU_STYLES}
                    icon={<BoltIcon/>}
                    label="Automation"
                    clickable
                />
                <Chip
                    sx={MENU_STYLES}
                    icon={<FilterListIcon/>}
                    label="Filters"
                    clickable
                />
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                <Button
                    variant="outlined"
                    startIcon={<PersonAddIcon/>}
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': {borderColor: 'white'}
                }}
                >Invite</Button>
                <AvatarGroup max={3}
                             sx={{
                                 gap: '10px',
                                 '& .MuiAvatar-root': {
                                     width: 34,
                                     height: 34,
                                     fontSize: 16,
                                     border: 'none',
                                     color: 'white',
                                     cursor: 'pointer',
                                     '&:first-of-type':{bgcolor: 'a4b0be'}
                                 }
                             }}
                >
                    <Tooltip title="datdev">
                        <Avatar alt="datdev"
                                src='https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/367440469_784381850131910_93636929748515675_n.jpg?stp=c0.59.240.240a_dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ao8HzxX9qQgAX8Zypln&_nc_oc=AQk5EVfy9gZ7muY3gbZb1L2ahl829XR54KREsKUizJao9P0_hdHZEgPPFEi-fAReB38&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDK3uVU0VpokmY29SoR5232AXqawl3U3eYXzo0ppXjtjg&oe=65A373BA'/>
                    </Tooltip>
                    <Tooltip title="datdev">
                        <Avatar alt="datdev"
                                src='https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/367440469_784381850131910_93636929748515675_n.jpg?stp=c0.59.240.240a_dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ao8HzxX9qQgAX8Zypln&_nc_oc=AQk5EVfy9gZ7muY3gbZb1L2ahl829XR54KREsKUizJao9P0_hdHZEgPPFEi-fAReB38&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDK3uVU0VpokmY29SoR5232AXqawl3U3eYXzo0ppXjtjg&oe=65A373BA'/>
                    </Tooltip>
                    <Tooltip title="datdev">
                        <Avatar alt="datdev"
                                src='https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/367440469_784381850131910_93636929748515675_n.jpg?stp=c0.59.240.240a_dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ao8HzxX9qQgAX8Zypln&_nc_oc=AQk5EVfy9gZ7muY3gbZb1L2ahl829XR54KREsKUizJao9P0_hdHZEgPPFEi-fAReB38&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDK3uVU0VpokmY29SoR5232AXqawl3U3eYXzo0ppXjtjg&oe=65A373BA'/>
                    </Tooltip>
                    <Tooltip title="datdev">
                        <Avatar alt="datdev"
                                src='https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/367440469_784381850131910_93636929748515675_n.jpg?stp=c0.59.240.240a_dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ao8HzxX9qQgAX8Zypln&_nc_oc=AQk5EVfy9gZ7muY3gbZb1L2ahl829XR54KREsKUizJao9P0_hdHZEgPPFEi-fAReB38&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDK3uVU0VpokmY29SoR5232AXqawl3U3eYXzo0ppXjtjg&oe=65A373BA'/>
                    </Tooltip>
                    <Tooltip title="datdev">
                        <Avatar alt="datdev"
                                src='https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/367440469_784381850131910_93636929748515675_n.jpg?stp=c0.59.240.240a_dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ao8HzxX9qQgAX8Zypln&_nc_oc=AQk5EVfy9gZ7muY3gbZb1L2ahl829XR54KREsKUizJao9P0_hdHZEgPPFEi-fAReB38&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDK3uVU0VpokmY29SoR5232AXqawl3U3eYXzo0ppXjtjg&oe=65A373BA'/>
                    </Tooltip>
                </AvatarGroup>
            </Box>
        </Box>
    );
}

export default BoardBar;