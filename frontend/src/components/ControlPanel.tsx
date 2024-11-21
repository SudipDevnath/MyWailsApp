import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DhinkaChika } from "../../wailsjs/go/main/App";
import { ComponentTheme } from "../Theme";

function ControlPanel() {
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    DhinkaChika().then((result: string) => setMsg(result));
  }, []);

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
      <b>{msg}</b>
    </Paper>
  );
}

export default ControlPanel;
