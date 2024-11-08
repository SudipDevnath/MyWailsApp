import { Paper, Typography } from "@mui/material";

function MainPanel() {
  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%", // Subtract the total border width
        height: "100%", // Subtract the total border height
      }}
    >
      <Typography>MainPanel</Typography>
    </Paper>
  );
}

export default MainPanel;
