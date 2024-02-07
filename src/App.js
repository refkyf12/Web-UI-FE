import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import { Sidebar } from './components/Sidebar';
import { Rightbar } from './components/Rightbar';
import { Navbar } from './components/Navbar';
import { ResumeTable } from './components/ResumeTable';
import { Box, Container, Stack } from '@mui/material';
import { useState } from 'react';
import { Footer } from './components/Footer';

function Resume() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    //Navbar
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Navbar onSidebarToggle={handleSidebarToggle}></Navbar>
      <Stack direction={'row'} spacing={2} justifyContent={'flex-start'}>
        <Sidebar isOpen={isSidebarOpen} ></Sidebar>
        <ResumeTable></ResumeTable>
      </Stack>
      <Footer></Footer>
    </Box>
  );
}

export default Resume;
