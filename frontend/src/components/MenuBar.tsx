import { Button, Menu, MenuItem, Paper } from "@mui/material";
import { useState } from "react";
import { ColorPalette } from "../Theme";

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
    name: "View",
    onClick: () => {
      alert("View");
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
        aria-controls={open ? "file-menu-button" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ marginBottom: 1, color: "black" }}
        variant="text"
      >
        <b>File</b>
      </Button>
      <Menu
        id="file-menu-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>New Project</MenuItem>
        <MenuItem onClick={handleClose}>Open Project</MenuItem>
      </Menu>
    </div>
  );
}

export default MenuBar;
