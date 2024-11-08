import { Box, Typography } from "@mui/material";

function MenuBar() {
  return (
    <Box
      sx={{
        width: "100%", // Subtract the total border width
        height: "100%", // Subtract the total border height
        border: "1px solid red",
        boxSizing: "border-box", // Ensures the border is included in the dimensions
      }}
    >
      <Typography>MenuBar</Typography>
    </Box>
  );
}

export default MenuBar;
