import { Paper, Typography } from "@mui/material";
import { ComponentTheme } from "../Theme";

function ControlPanel() {
  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: ComponentTheme.backgroundColor,
      }}
    >
      <Typography>ControlPanel</Typography>
    </Paper>
  );
}

export default ControlPanel;
