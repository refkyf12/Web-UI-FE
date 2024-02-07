import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { Box, Container, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Footer } from '../components/Footer';

function Configuration() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navbar onSidebarToggle={handleSidebarToggle}></Navbar>
      <Stack direction={'row'} spacing={2} justifyContent={'flex-start'}>
        <Sidebar isOpen={isSidebarOpen}></Sidebar>
        <div style={{width: '100%', backgroundColor: "#fff", margin: 0 }}>
        <Box sx={{display: 'flex', flexDirection: 'column', backgroundColor: 'primary'}}>
          <Typography variant='h5'>Field 1</Typography>
          <hr></hr>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{marginTop: 1}}></TextField>
          <Typography variant='h5'>Field 1</Typography>
          <hr></hr>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{marginTop: 1}}></TextField>
          <Typography variant='h5'>Field 1</Typography>
          <hr></hr>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{marginTop: 1}}></TextField>
          <Typography variant='h5'>Field 1</Typography>
          <hr></hr>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{marginTop: 1}}></TextField>
        </Box>
        </div>
      </Stack>
      <Footer></Footer>
    </Box>
  );
}

export default Configuration;
