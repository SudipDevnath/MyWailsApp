import { Grid2 as Grid } from "@mui/material";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import DetailsBar from "./components/DetailsBar";
import MainPanel from "./components/MainPanel";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div id="App">
      <Grid
        container
        columns={12}
        spacing={0.3}
        sx={{
          width: "100vw", // Subtract the total border width
          height: "calc(100svh - 8px)", // Subtract the total border height
        }}
      >
        <Grid size={12} sx={{ height: "30px" }}>
          <MenuBar />
        </Grid>
        <Grid size={3} sx={{ height: "calc(100% - 60px)" }}>
          <ControlPanel />
        </Grid>
        <Grid size={9}>
          <MainPanel />
        </Grid>
        <Grid size={12} sx={{ height: "30px" }}>
          <DetailsBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
