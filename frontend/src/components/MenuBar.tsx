import { Button, Paper } from "@mui/material";
import { ColorPalette } from "../Theme";

type Menu = {
  name: string;
  onClick: (params: any) => void;
};

const Menus: Menu[] = [
  {
    name: "File",
    onClick: () => {
      alert("File");
    },
  },
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

export default MenuBar;
