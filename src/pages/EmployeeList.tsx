import Layout from "../components/Layout";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import  dataType  from "../types/DataType";

export default function EmployeeList() {

  const columns = [
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "dateOfBirth", headerName: "Date of Birth", flex: 1 },
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "street", headerName: "Street", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "state", headerName: "State", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
    { field: "department", headerName: "Department", flex: 1 },
  ];


    const newEmployeeData = localStorage.getItem("newEmployeeData");
    
    if (!newEmployeeData) {
      return null; 
    }
  
    const newEmployeeDataParsed: dataType = JSON.parse(newEmployeeData);
  
    const {
      firstName,
      lastName,
      startDate,
      department,
      dateOfBirth,
      street,
      city,
      state,
      zipCode,
    } = newEmployeeDataParsed;
  

  const rows = [
    {
      id: 1,
      firstName: {firstName},
      lastName: {lastName},
      dateOfBirth: {dateOfBirth},
      startDate: {startDate},
      street: {street},
      city: {city},
      zipCode: {zipCode},
      state: {state},
      department: {department},
    }
    ];
  
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 4,
          backgroundColor: "background.default",
        }}
      >
        <Typography
          component="h2"
          variant="h3"
          align="center"
          sx={{ paddingBottom: 7, paddingTop: 7, fontFamily: "Genos", color: "text.primary" }}
        >
          CURRENT EMPLOYEES
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<AddIcon />}
          component={Link}
          to="/create-employee"
          sx={{
            height: 50,
            borderRadius: 5,
            ":hover": {
              backgroundColor: "primary.main",
              color: "text.secondary",
            },
          }}
        >
          Create Employee
        </Button>
      </Box>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Layout>
  );
}
