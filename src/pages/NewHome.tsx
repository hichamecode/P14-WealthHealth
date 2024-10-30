import { Box, Paper, Button, Typography } from "@mui/material";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function NewHome() {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          paddingX: 2,
          backgroundColor: "background.default",
          height: "80vh",
          // minHeight: "100vh"
        }}
      >
        <Typography variant="h1" component="h1" color="text.primary">
          Welcome to HR NET
        </Typography>
        <Typography variant="h4" component="h3" fontStyle="italic" fontWeight="200" color="text.primary">
          A New Way of Managing The Human Resources System
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            marginTop: 5,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              position: "relative",
              padding: 4,
              width: 400,
              height: 300,
              display: "flex",
              flexDirection: "column",
              borderRadius: "18%",
              gap: 2,
              color: "text.primary",
              backgroundColor: "background.paper"
            }}
          >
            <Typography variant="h5" component="h2" fontFamily="Genos" fontSize={32}>
              Create Employee
            </Typography>
            <Typography>
              <i>You will need to provide the employee's personal information.</i>
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/create-employee"
              sx={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)", 
                padding: 2,
                minWidth: 300, 
                minHeight: 90,
                borderRadius: 18,
              }}
            >
              <AddIcon sx={{ fontSize: 64 }} /> 
            </Button>
          </Paper>

          <Paper
            elevation={3}
            sx={{
              position: "relative",
              padding: 4,
              width: 400,
              height: 300,
              display: "flex",
              flexDirection: "column",
              borderRadius : 18,
              gap: 2,
              color: "text.primary", 
              backgroundColor: "background.paper"
            }}
          >
            <Typography variant="h5" component="h2" fontFamily="Genos" fontSize={32}>
              Employee List
            </Typography>
            <Typography >
              <i>View and manage the list of employees in the Human Resources System.</i>
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/employee-list"
              sx={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",  
                padding: 2,
                minWidth: 300, 
                minHeight: 90,
                borderRadius: 18
              }}
            >
              <VisibilityIcon sx={{ fontSize: 64 }} />
            </Button>
          </Paper>
        </Box>
      </Box>
    </Layout>
  );
}
