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
  FormHelperText,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { states, departments } from "../data/data";
import Layout from "../components/Layout";
import { schema, FormFields } from "../utils/validationSchema";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function CreateEmployee() {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFields> = (data): void => {
    console.log(data);
    localStorage.setItem("newEmployeeData", JSON.stringify(data));
    toast.success("Employee created successfully!", {
      position: "top-center",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      hideProgressBar: false,
      theme: isDarkMode ? "dark" : "light",
      
    });
    navigate("/employee-list");
  };

  const onInvalid = (): void => {
    toast.error("Please fill out all the required fields ", {
      position: "top-center",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      hideProgressBar: false,
      theme: isDarkMode ? "dark" : "light",
    });
  };

  const styleForInputLabels = {
    "& .MuiFormLabel-root": {
      color: "text.primary",
    },
  };

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
          CREATE EMPLOYEE
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<VisibilityIcon />}
          component={Link}
          to="/employee-list"
          sx={{
            height: 50,
            borderRadius: 5,
            ":hover": {
              backgroundColor: "primary.main",
              color: "text.secondary",
            },
          }}
        >
          Employee List
        </Button>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        sx={{
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        <Grid2
          container
          spacing={2}
          gap={3}
          direction="column"
          alignContent="center"
        >
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              sx={styleForInputLabels}
              label="First Name"
              type="text"
              variant="outlined"
              fullWidth
              {...register("firstName")}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <TextField
              sx={styleForInputLabels}
              label="Last Name"
              type="text"
              variant="outlined"
              fullWidth
              {...register("lastName")}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Stack>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    sx={styleForInputLabels}
                    label="Date of Birth"
                    format="YYYY-MM-DD"
                    disableFuture
                    slotProps={{
                      textField: {
                        error: !!errors.dateOfBirth,
                        helperText: errors.dateOfBirth?.message,
                      },
                    }}
                  />
                )}
              />
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    sx={styleForInputLabels}
                    label="Start Date"
                    format="YYYY-MM-DD"
                    disableFuture
                    slotProps={{
                      textField: {
                        error: !!errors.startDate,
                        helperText: errors.startDate?.message,
                      },
                    }}
                  />
                )}
              />
            </Stack>
          </LocalizationProvider>
          <FormGroup>
            Address
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                sx={styleForInputLabels}
                label="Street"
                type="text"
                fullWidth
                variant="filled"
                {...register("street")}
                error={!!errors.street}
                helperText={errors.street?.message}
              />
              <TextField
                sx={styleForInputLabels}
                label="City"
                type="text"
                fullWidth
                variant="filled"
                {...register("city")}
                error={!!errors.city}
                helperText={errors.city?.message}
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <FormControl fullWidth error={!!errors.state}>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <Select {...field} label="State" fullWidth variant="filled">
                      {states.map((state) => (
                        <MenuItem key={state} value={state}>
                          {state}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <FormHelperText>{errors.state?.message}</FormHelperText>
              </FormControl>
              <TextField
                sx={styleForInputLabels}
                label="Zip Code"
                type="text"
                fullWidth
                variant="filled"
                {...register("zipCode")}
                error={!!errors.zipCode}
                helperText={errors.zipCode?.message}
              />
            </Stack>
          </FormGroup>
          <FormGroup>
            Department
            <FormControl fullWidth error={!!errors.department}>
              <Controller
                name="department"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Department"
                    fullWidth
                    variant="outlined"
                    sx={{ marginBottom: 4 }}
                  >
                    {departments.map((department) => (
                      <MenuItem key={department} value={department}>
                        {department}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <FormHelperText>{errors.department?.message}</FormHelperText>
            </FormControl>
          </FormGroup>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            sx={{ marginBottom: 5 }}
            size="large"
          >
            SAVE
          </Button>
        </Grid2>
      </Box>
    </Layout>
  )
}
