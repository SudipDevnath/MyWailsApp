import {
  Button,
  Menu,
  MenuItem,
  Paper,
  Divider,
} from "@mui/material";
import { useState } from "react";

import Check from "@mui/icons-material/Check";
import { ColorPalette } from "../Theme";
import {useToggleWorldPlaneStore} from "../store/toggleWorldPlane";


type Menu = {
  name: string;
  onClick: (params: any) => void;
};

const Menus: Menu[] = [
  {
    name: "Edit",
    onClick: () => {
      alert("Edit");
    },
  },
  {
    name: "Help",
    onClick: () => {
      alert("Help");
    },
  },
];

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
      {Menus.map((menu) => (
        <Button
          variant="text"
          key={menu.name}
          sx={{ marginBottom: 1, color: "black" }}
          onClick={menu.onClick}
        >
          <b>{menu.name}</b>
        </Button>
      ))}
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


  const toggleViewXY = useToggleWorldPlaneStore((state) => state.toggleXY);
  const toggleViewYZ = useToggleWorldPlaneStore((state) => state.toggleYZ);
  const toggleViewZX = useToggleWorldPlaneStore((state) => state.toggleZX);

  const planes = [
    { label: "XY World Plane", isVisible: useToggleWorldPlaneStore((state) => state.viewXY), onClick: () => {toggleViewXY(); handleClose();} },
    { label: "YZ World Plane", isVisible: useToggleWorldPlaneStore((state) => state.viewYZ), onClick: () => {toggleViewYZ(); handleClose();} },
    { label: "ZX World Plane", isVisible: useToggleWorldPlaneStore((state) => state.viewZX), onClick: () => {toggleViewZX(); handleClose();} },
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
      </Menu>
    </div>
  );
}

export default MenuBar;
