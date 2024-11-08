import { Paper, Typography } from "@mui/material";
import { ComponentTheme } from "../Theme";

function DetailsBar() {
  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: ComponentTheme.backgroundColor,
      }}
    >
      <Typography>DetailsBar</Typography>
    </Paper>
  );
}

export default DetailsBar;
