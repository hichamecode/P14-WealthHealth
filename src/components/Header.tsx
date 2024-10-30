import { Link } from "react-router-dom";
import { Box, Button, FormControlLabel, Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { RootState } from "../store/store";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function Header() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        backgroundColor: "primary.main",
        height: "auto",
      }}
    >
      <Button
        component={Link}
        to="/"
        sx={{
          fontSize: "1.8rem",
          fontFamily: "Genos",
          fontStyle: "italic",
          color: "text.secondary",
          opacity: 0.9,
          textDecoration: "none",
          "&:hover": {
            color: "primary.dark",
            backgroundColor: "white",
          },
          transition: "all 0.3s ease",
          borderRadius: 5,
          padding: "0.5rem 1rem",
        }}
      >
        Wealth Health
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormControlLabel 
        value="dark mode"
        control={<Switch
          checked={isDarkMode}
          onChange={() => dispatch(toggleTheme())}
          color="default"
          inputProps={{ "aria-label": "dark mode toggle" }}
        />}
        label={isDarkMode ? "Dark Mode" : "Light Mode"}
        labelPlacement="bottom"
        />
        
        <Box sx={{ display: "flex", gap: 2 }}>
          <LightMode sx={{ fontSize: 18, color: "text.secondary" }}  />
          <DarkMode sx={{ fontSize: 18, color: "text.secondary" }} />
        </Box>
      </Box>
    </Box>
  );
}
