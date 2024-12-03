import {
  Button,
  Menu,
  MenuItem,
  Paper,
  Divider,
  Typography,
} from "@mui/material";
import { useState } from "react";

import Check from "@mui/icons-material/Check";
import { ColorPalette } from "../Theme";
import * as ToggleWorldPlaneStore from "../store/toggleWorldPlane";




function MenuBar() {
  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: ColorPalette.secondary,
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <FileMenu />
      <ViewMenu />
    </Paper>
  );
}

function FileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="file-menu-button"
        aria-controls={open ? "file-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ marginBottom: 1, color: "black" }}
        variant="text"
      >
        <b>File</b>
      </Button>
      <Menu
        id="file-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "file-menu-button",
          sx: { "& .MuiMenuItem-root": { py: 0.5 } },
        }}
      >
        <MenuItem onClick={handleClose}>New Project</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Open Project</MenuItem>
      </Menu>
    </div>
  );
}

function ViewMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const isVisibleXY = ToggleWorldPlaneStore.useWorldPlaneViewXY();
  const isVisibleYZ = ToggleWorldPlaneStore.useWorldPlaneViewYZ();
  const isVisibleZX = ToggleWorldPlaneStore.useWorldPlaneViewZX();

  const toggleXY = ToggleWorldPlaneStore.useToggleWorldPlaneViewXY();
  const toggleYZ = ToggleWorldPlaneStore.useToggleWorldPlaneViewYZ();
  const toggleZX = ToggleWorldPlaneStore.useToggleWorldPlaneViewZX();

  const planes = [
    { label: "XY World Plane", isVisible: isVisibleXY, onClick: () => { toggleXY(); handleClose(); } },
    { label: "YZ World Plane", isVisible: isVisibleYZ, onClick: () => { toggleYZ(); handleClose(); } },
    { label: "ZX World Plane", isVisible: isVisibleZX, onClick: () => { toggleZX(); handleClose(); } },
  ];

  return (
    <div>
      <Button
        id="view-menu-button"
        aria-controls={open ? "view-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ marginBottom: 1, color: "black" }}
        variant="text"
      >
        <b>View</b>
      </Button>
      <Menu
        id="view-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "view-menu-button",
          sx: { "& .MuiMenuItem-root": { py: 0.5, fontSize: "1rem" } },
        }}
      >

        <Typography variant="subtitle2" sx={{ textAlign: "left", px: 2, fontStyle: "italic", fontWeight: "bold", color: "rgba(0,0,0,0.5)" }} >Planes</Typography>
        <Divider />
        {planes.map((plane) => (
          <div key={plane.label}>
            <MenuItem onClick={plane.onClick}>
              <b>{plane.label}</b>
              {plane.isVisible && (
                <Check
                  sx={{
                    fontSize: "1rem",
                    ml: 1,
                  }}
                />
              )}
            </MenuItem>
          </div>
        ))}

        <Typography variant="subtitle2" sx={{ textAlign: "left", px: 2, fontStyle: "italic", fontWeight: "bold", color: "rgba(0,0,0,0.5)" }} >Camera</Typography>
        <Divider />
        <MenuItem >
          <b>Reset Camera</b>
          <Check
            sx={{
              fontSize: "1rem",
              ml: 1,
            }}
          />
        </MenuItem>

        
      </Menu>
    </div>
  );
}

export default MenuBar;
