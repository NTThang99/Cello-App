import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
const Profiles = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ padding: '0' }}
                        aria-controls={open ? 'basic-menu-profiles' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar
                            sx={{ width: 32, height: 32 }}
                            alt="Datdev"
                            src='https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/367440469_784381850131910_93636929748515675_n.jpg?stp=c0.59.240.240a_dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ao8HzxX9qQgAX8Zypln&_nc_oc=AQk5EVfy9gZ7muY3gbZb1L2ahl829XR54KREsKUizJao9P0_hdHZEgPPFEi-fAReB38&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDK3uVU0VpokmY29SoR5232AXqawl3U3eYXzo0ppXjtjg&oe=65A373BA'
                        />
                    </IconButton>
                </Tooltip>
            <Menu
                id="basic-menu-profiles"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button-profiles'
                }}
            >
                <MenuItem>
                    <Avatar sx={{ width: 28, height: 28, mr: 2}} /> Profile
                </MenuItem>
                <MenuItem>
                    <Avatar  sx={{ width: 28, height: 28, mr: 2}} /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default Profiles;