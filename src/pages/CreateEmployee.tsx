import { zodResolver } from "@hookform/resolvers/zod";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  Grid2,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { departments } from "../data/data";
import { RootState, AppDispatch } from "../store/store";
import { FormFields, schema } from "../utils/validationSchema";
import { createEmployeeThunk } from "../store/employeesSlice";
import { fetchAddressSuggestions } from "../store/addressSlice";
import { useState } from "react";
import Modal from "hichamebelyazid-modal/src/components/Modal/Modal";

export default function CreateEmployee() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");
  const [, setAddressInput] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const suggestions = useSelector(
    (state: RootState) => state.address.suggestions || []
  );

  const handleAddressInput = (event: React.SyntheticEvent, value: string) => {
    setAddressInput(value);
    if (value.length > 2) {
      dispatch(fetchAddressSuggestions());
    }
  };

  const handleAddressSelect = (
    event: React.SyntheticEvent,
    selectedOption: { description: string } | null
  ) => {
    if (selectedOption && selectedOption.description) {
      const [street, city, state] = selectedOption.description
        .split(",")
        .map((item) => item.trim());
      console.log(street);
      setValue("street", street);
      setValue("city", city);
      setValue("state", state);
    }
  };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFields> = (data): void => {
      const employeeData = {
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : new Date(),
          startDate: data.startDate ? new Date(data.startDate) : new Date(),
          street: data.street || "",
          city: data.city || "",
          state: data.state || "",
          zipCode: data.zipCode || "",
          department: data.department || "",
      };
      dispatch(createEmployeeThunk(employeeData));

    try {
      setModalTitle("Employee Created");
      setModalText("Employee created successfully");
      setModalVisible(true);
      setTimeout(() => {navigate("/employee-list")}, 3000);
    } catch (error) {
      console.log("error ", error);
      setModalTitle("Error");
      setModalText("Failed to create employee");
      setModalVisible(true);
    }
  };

  const onInvalid = (): void => {
    setModalTitle("INCOMPLETE FORM");
    setModalText("Please fill in all required fields");
    setModalVisible(true);
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
          flex: 1,
          backgroundColor: "background.default",
        }}
      >
        <Typography
          component="h2"
          variant="h3"
          align="center"
          sx={{
            paddingTop: 5,
            paddingBottom: 5,
            fontFamily: "Genos",
            color: "text.primary",
          }}
        >
          CREATE EMPLOYEE
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<VisibilityIcon />}
          component={Link}
          to="/employee-list"
          data-testid="employee-list-button"
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
        data-testid="employee-form"
      >
        <Grid2
          container
          spacing={4}
          gap={4}
          direction="column"
          alignContent="center"
        >
          <Stack spacing={4} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              sx={styleForInputLabels}
              label="First Name"
              type="text"
              data-testid="first-name"
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
              data-testid="last-name"
              variant="outlined"
              fullWidth
              {...register("lastName")}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Stack>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={4} direction="row" sx={{ marginBottom: 4 }}>
              <Controller
                name="dateOfBirth"
                data-testid="birthdate"
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
                data-testid="startdate"
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
            <Stack spacing={4} direction="row" sx={{ marginBottom: 4 }}>
              <Autocomplete
                fullWidth
                options={suggestions}
                getOptionLabel={(option: { description: string }) =>
                  option.description
                }
                onInputChange={handleAddressInput}
                onChange={(event, value) => handleAddressSelect(event, value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...register("street")}
                    label="Street"
                    data-testid="street"
                    variant="filled"
                    fullWidth
                    error={!!errors.street}
                    helperText={errors.street?.message}
                    sx={styleForInputLabels}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
              <TextField
                sx={styleForInputLabels}
                label="City"
                data-testid="city"
                type="text"
                InputLabelProps={{ shrink: true }}
                fullWidth
                variant="filled"
                {...register("city")}
                error={!!errors.city}
                helperText={errors.city?.message}
              />
            </Stack>
            <Stack spacing={4} direction="row" sx={{ marginBottom: 4 }}>
              <FormControl fullWidth error={!!errors.state}>
                <TextField
                  sx={styleForInputLabels}
                  label="State"
                  data-testid="state"
                  type="text"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  variant="filled"
                  {...register("state")}
                  helperText={errors.state?.message}
                />
              </FormControl>
              <TextField
                sx={styleForInputLabels}
                label="Zip Code"
                data-testid="zip-code"
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
            <FormControl
              fullWidth
              data-testid="department"
              error={!!errors.department}>
              <Controller
                name="department"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Department"
                    fullWidth
                    variant="outlined"
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
       {/* Modal display */}
       {modalVisible && (
        <Modal
          modalTitle={modalTitle}
          modalText={modalText}
          onClose={() => setModalVisible(false)}
        />
      )}
    </Layout>
  );
}
