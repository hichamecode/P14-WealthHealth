import { Link } from "react-router-dom"
import logo from '../assets/main-logo.png'
import { Button, Typography, Box, IconButton } from "@mui/material"

export default function Header() {
  return (
    <Box component="header" sx={ {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 1,
      backgroundColor: 'secondary.main',
      opacity:0.9,
      color: 'white',
      height:150
    }}>
      <IconButton component={Link} to="/" size="small">
        <Box component="img" alt="main logo image" src={logo}></Box>
      </IconButton>
      <Typography variant="h2" component="h1" align="center">
      </Typography>
      <Box component="nav" sx={{
        display: 'flex',
        gap: 5
      }}>
        <Link to='/employee-list'><Button variant="outlined" size="large"  sx={{
          backgroundColor: 'primary.main',
          color:"white",
          border:"white 2px solid"
        }}>Employee List</Button></Link>
        <Link to='/'><Button variant="outlined" size="large" sx={{
          backgroundColor: 'primary.main',
          color:"white",
          border:"white 2px solid"
        }} >Create Employee</Button></Link>
      </Box>
    </Box>
  )
}