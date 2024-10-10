import './App.css'
import Router from './routes/Router'
import {theme} from "./utils/theme"
import { ThemeProvider, CssBaseline } from '@mui/material'

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     <Router />
    </ThemeProvider>
  )
}

