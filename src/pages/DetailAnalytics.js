import { Avatar, Box, Card, CardContent, CardMedia, Grid, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import AdjustIcon from '@mui/icons-material/Adjust';
import CardCover from '@mui/joy/CardCover';
import { Footer } from '../components/Footer';

function DetailAnalytics() {
  const [dataDetail, setDataDetail] = useState([]);
  const { id } = useParams();

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    fetch(`http://10.202.0.129:5047/api/get_data/${id}`)
      .then(response => response.json())
      .then(data => setDataDetail(data.data));
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Navbar onSidebarToggle={handleSidebarToggle}></Navbar>
      <Stack direction={'row'} spacing={2} justifyContent={'flex-start'}>
      <Sidebar isOpen={isSidebarOpen}></Sidebar>
      <div style={{width: '100%', height: 'auto', backgroundColor: "#fff", margin: 0 }}>
        <Card sx={{display: 'flex', width: '100%', height: 'auto', backgroundColor:'#fff'}}>
          <Box
            sx={{
              padding: 2, // Adjust padding as needed
              borderRadius: 8, // Adjust border radius as needed
              overflow: 'hidden',
              zIndex: 9999,
              margin: 0 // Ensure content stays within rounded corners
            }}
          >
            <video
              autoPlay
              loop
              muted
              poster="https://assets.codepen.io/6093409/river.jpg"
              style={{ maxWidth: '100%', height: 'auto' }}
            >
              <source
                src="https://assets.codepen.io/6093409/river.mp4"
                type="video/mp4"
              />
            </video>
          </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Description
              </Typography>
              <Typography>
              {dataDetail[0] ? dataDetail[0].created_at : null}
              </Typography>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AdjustIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={dataDetail[0] ? dataDetail[0].anomaly : null} secondary="Anomaly" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AdjustIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText  primary={dataDetail[0] ? dataDetail[0].unit : null} secondary="Unit" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AdjustIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText  primary={dataDetail[0] ? dataDetail[0].jenis : null} secondary="Jenis" />
                </ListItem>
              </List>
            </CardContent>
        </Card>
        </div>
      </Stack>
      <Footer></Footer>
    </Box>
  );
}

export default DetailAnalytics;