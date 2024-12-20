import { Paper, Typography, Button } from "@mui/material";


import { ComponentTheme } from "../Theme";

function ControlPanel() {




  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: ComponentTheme.backgroundColor,
        border: "1px solid black",
      }}
    >
      <Typography>ControlPanel</Typography>

      <Button variant="contained" color="primary">Click Me</Button>
    </Paper>
  );
}

export default ControlPanel;
