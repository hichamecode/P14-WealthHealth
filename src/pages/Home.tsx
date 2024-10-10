import Layout from "../components/Layout";
import {
  Grid2,
  Typography,
  TextField,
  FormGroup,
  Stack,
  Select,
  MenuItem,
  Box, 
  Button,
  FormControl,
  FormHelperText
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { states, departments } from "../data/data";

export default function Home() {


  const [selectedState, setSelectedState] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("")

  const handleStateChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSelectedState(event.target.value)
  }

  const handleDepartmentChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSelectedDepartment(event.target.value)
  }

  return (
 <Layout>
      <Typography
        component="h2"
        variant="h3"
        align="center"
        sx={{marginBottom: 7, marginTop: 7}}
        color="secondary"
      >
        CREATE EMPLOYEE
      </Typography>
      <Box component="form">
      <Grid2
        container
        spacing={2}
        gap={3}
        direction="column"
        alignContent="center"
      >
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            label="First Name"
            type="text"
            variant="outlined"
            required
            fullWidth
          >
            First Name
          </TextField>
          <TextField
            label="Last Name"
            type="text"
            variant="outlined"
            required
            fullWidth
          >
            Last Name
          </TextField>
        </Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <DatePicker label="Date of Birth" format="DD-MM-YYYY" slotProps={{
              textField:{
                required: true,
                helperText: "Please enter your date of birth"
              }
            }}/>
            <DatePicker label="Start Date" format="DD-MM-YYYY" slotProps={{
              textField:{
                required:true,
                helperText: "Please enter your start date"
              }
            }}/>
          </Stack>
        </LocalizationProvider>
        <FormGroup>
          Address
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              label="Street"
              type="text"
              required
              fullWidth
              variant="filled"
            >
              Street
            </TextField>
            <TextField
              label="City"
              type="text"
              required
              fullWidth
              variant="filled"
            >
              City
            </TextField>
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <FormControl fullWidth>
            <Select label="State" required fullWidth variant="filled" value={selectedState} onChange={handleStateChange} >
            {states.map((state) => (
  <MenuItem key={state} value={state}>
    {state}
  </MenuItem>
))}
            Select Your State</Select>
            <FormHelperText>Please select your state</FormHelperText>
            </FormControl>
           
            <TextField
              label="Zip Code"
              type="number"
              required
              fullWidth
              variant="filled"
            >
              Zip Code
            </TextField>
          </Stack>
        </FormGroup>
        <FormGroup>
          Department
            <Select label="Department" required fullWidth variant="outlined" value={selectedDepartment} onChange={handleDepartmentChange} sx={{marginBottom: 4}}>
              {departments.map((department) => (
                <MenuItem key={department} value={department}>
                  {department}
                </MenuItem>
              ))}
            </Select>
        </FormGroup>
        <Button variant="contained" type="submit" color="secondary" sx={{marginBottom: 5}} size="large">SAVE</Button>
      </Grid2>
      </Box>
    
    </Layout>
  )
}

