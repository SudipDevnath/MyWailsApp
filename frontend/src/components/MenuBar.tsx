import { Paper, Typography } from "@mui/material";
import { ComponentTheme } from "../Theme";

function MenuBar() {
  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: ComponentTheme.backgroundColor,
      }}
    >
      <Typography>MenuBar</Typography>
    </Paper>
  );
}

export default MenuBar;
