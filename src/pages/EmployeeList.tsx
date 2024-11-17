import Layout from "../components/Layout";
import { Button, Typography, Box, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { useState } from "react";
import { GridFilterModel } from "@mui/x-data-grid";


export default function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees);
  const [searchText, setSearchText] = useState("");
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });
  
  const columns: GridColDef[] = [
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

  const rows = employees.map((employee: any, index: number) => ({
    ...employee,
    id: index,
  }));

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 4,
          flex: 1,
          backgroundColor: "background.default",
        }}
      >
        <Typography
          component="h2"
          variant="h3"
          align="center"
          sx={{
            paddingBottom: 2,
            paddingTop: 2,
            fontFamily: "Genos",
            color: "text.primary",
          }}
        >
          CURRENT EMPLOYEES
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          data-testid="create-employee-button"
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
        {/* Search Field */}
        <Box sx={{ width: "100%", display: "flex", alignContent: "center", justifyContent: "center" }}>
          <TextField
            label="Search"
            variant="outlined"
            sx={{
              margin: "auto",
              width: "50%",
              height:"100%"
            }}
            onChange={(e) => setSearchText(e.target.value)}

          />
        </Box>
        <DataGrid
          getRowId={(row) => row.id}
          rows={filteredRows}
          columns={columns}
          filterMode="client"
          filterModel={filterModel}
          onFilterModelChange={(newModel) => setFilterModel(newModel)} // Sync changes
          checkboxSelection
          disableRowSelectionOnClick
          sx={{ backgroundColor: "background.default" }}
        />
      </Box>
    </Layout>
  );
}
