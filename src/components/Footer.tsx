
import { Box, Typography } from "@mui/material"

export default function Footer() {

  return (
    <Box
      component="footer" sx={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
        backgroundColor: 'primary.main',
        color: "text.secondary",
      }}
    >
      <Typography variant="body1" align="center">
        2024 Wealth Health. All rights reserved.
      </Typography>
      <Typography variant="body1" align="center">
        Internal application - use of the Human Ressources Services only.
      </Typography>
    </Box>
  )
}