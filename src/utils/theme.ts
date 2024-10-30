import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#3634a3"
    },
    secondary: {
      main: "#FFD903"
    },
    background: {
      default: "#f2f2f2"
    },
    text: {
      primary: "#000000",  
      secondary: "#ffffff",

    }
  },
})

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#ffab40"
    },
    secondary: {
      main: "#FFD903"
    },
    background: {
      default: "#1a1a1a",
      paper: "#2c2c2c"
    },
    text: {
      primary: "#ffffff",  
      secondary: "#000000", 
    }
  },
})
