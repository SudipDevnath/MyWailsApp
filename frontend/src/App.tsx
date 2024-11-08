import { Grid2 as Grid } from "@mui/material";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import DetailsBar from "./components/DetailsBar";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div id="App">
      <Grid
        container
        columns={12}
        sx={{
          width: "calc(100vw - 2px)", // Subtract the total border width
          height: "calc(100svh - 2px)", // Subtract the total border height
          border: "1px solid red",
          boxSizing: "border-box", // Ensures the border is included in the dimensions
        }}
      >
        <Grid size={12} sx={{ height: "30px" }}>
          <MenuBar />
        </Grid>
        <Grid size={3} sx={{ height: "calc(100% - 60px)" }}>
          <ControlPanel />
        </Grid>
        <Grid size={9}>
          <ControlPanel />
        </Grid>
        <Grid size={12} sx={{ height: "30px" }}>
          <DetailsBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
