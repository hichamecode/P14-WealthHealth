import Layout from "../components/Layout";
import { Button, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useSelector } from "react-redux";


export default function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees);

  const columns: GridColDef[] = [
    { field: "firstName", headerName: "First Name", flex: 1, },
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
        <DataGrid
          getRowId={(row) => row.id}
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{ backgroundColor: "background.default" }}
        />
      </Box>
    </Layout>
  );
}
