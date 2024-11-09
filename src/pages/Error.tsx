import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";

export default function Error() {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          backgroundColor: "background.default",
        }}
      >
        <Typography variant="h4" component="h1" color="text.primary">
          404 - Page Not Found
        </Typography>
      </Box>
    </Layout>
  );
}
