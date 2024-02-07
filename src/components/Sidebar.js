import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Inventory2Icon from '@mui/icons-material/Inventory2';
import React from 'react'

export const Sidebar = ({ isOpen }) => {
  return (
    <Box flex={1} 
        sx={{
        width: isOpen ? 400 : 0,
        paddingY: 2,
        paddingX: isOpen ? 2 : 0,
        maxWidth: 200,
        // display: isOpen ? "block" : "none",
        // overflowX: isOpen ? 'visible' : 'hidden',
        transition: 'all 0.7s ease-in-out',
        }}>
        <List>
            <ListItem disablePadding divider={true}>
                <ListItemButton component="a" href='/'>
                <ListItemIcon>
                    <Inventory2Icon />
                </ListItemIcon>
                <ListItemText primary="Resume" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding divider={true}>
                <ListItemButton component="a" href='#object'>
                <ListItemIcon>
                    <Inventory2Icon />
                </ListItemIcon>
                <ListItemText primary="Realtime Analytic" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding divider={true}>
                <ListItemButton component="a" href='#object'>
                <ListItemIcon>
                    <Inventory2Icon />
                </ListItemIcon>
                <ListItemText primary="Offline Analytic" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding divider={true}>
                <ListItemButton component="a" href='#object'>
                <ListItemIcon>
                    <Inventory2Icon />
                </ListItemIcon>
                <ListItemText primary="Video Management System" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding divider={true}>
                <ListItemButton component="a" href='/configuration'>
                <ListItemIcon>
                    <Inventory2Icon />
                </ListItemIcon>
                <ListItemText primary="Configuration" />
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
  )
}
