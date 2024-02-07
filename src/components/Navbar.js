import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, Divider, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useState } from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Sidebar } from '../components/Sidebar';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({theme}) => ({
    display: 'none',
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: 'flex'
    }
}))

const UserBox = styled(Box)(({theme}) => ({
    display: 'flex',
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: 'none'
    }
}))

export const Navbar = ({ onSidebarToggle }) => {
  const [open, setOpen] = useState(false)
  const [openNotification, setOpenNotification] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
    setOpenNotification(true);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
    setOpenNotification(false);
  };

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
    setOpen(false);
  };


  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display: {xs: 'none', sm:'block'}}}>
                Testing
            </Typography>
            <LogoDevIcon sx={{display: {xs: 'block', sm:'none'}}}></LogoDevIcon>
            <IconButton aria-label="toggle-sidebar" onClick={onSidebarToggle}>
                <DensityMediumIcon color="secondary"/>
            </IconButton>
            <Search>
                <InputBase placeholder='Search...'></InputBase>
            </Search>
            <Icons>
                    <IconButton onClick={handleNotificationClick}>
                    <Badge badgeContent={4} color='error'>
                        <NotificationsIcon></NotificationsIcon>
                    </Badge>
                    </IconButton>                    
                <Avatar onClick={handleProfileClick} sx={{width:30, height:30}}></Avatar>
            </Icons>
            <UserBox onClick={handleProfileClick}>
                <Avatar sx={{width:30, height:30}}></Avatar>
                <Typography>Admin</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={handleProfileClose}
            anchorEl={profileAnchorEl}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
        <Menu
            id="notification-menu"
            aria-labelledby="demo-positioned-button"
            open={openNotification}
            onClose={handleNotificationClose}
            anchorEl={notificationAnchorEl}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
        >
            <MenuItem>Notif1</MenuItem>
            <MenuItem>Notif2</MenuItem>
            <MenuItem>Notif3</MenuItem>
        </Menu>
    </AppBar>
  )
}
