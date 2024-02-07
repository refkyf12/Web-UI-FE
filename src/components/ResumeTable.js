import { Box, Button, IconButton, Typography } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import PageviewIcon from '@mui/icons-material/Pageview';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const ResumeTable = () => {
  const [tableData, setTableData] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://10.202.0.129:5047/api/get_data")
      .then(response => response.json())
      .then(data => setTableData(data.data));  // Sesuaikan dengan struktur data yang benar
  }, []);

  const getRowId = (row) => row.id_analytic;


  const columns = [
  { field: 'id_analytic', headerName: 'ID' },
  { field: 'anomaly', headerName: 'Anomaly', width: 250 },
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'jenis', headerName: 'Type', width: 200 },
  { field: 'unit', headerName: 'Unit', width: 250 },
  { field: 'created_at', headerName: 'Date', width: 250 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <IconButton
        variant="contained"
        onClick={() => navigate(`/detail-analytics/${params.row.id_analytic}`)}
      >
        <PageviewIcon></PageviewIcon>
      </IconButton>
    ),
  },
  ]


  return (
    <div style={{ height: 'auto', width: '100%', backgroundColor: "#fff", margin: 0 }}>
      <DataGrid
      sx={{backgroundColor: "#fff", height: 'auto'}}
        rows={tableData}
        columns={columns}
        getRowId={getRowId}
        slots={{
          toolbar: GridToolbar
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
      />
    </div>
  )
}
