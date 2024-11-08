import { createTheme } from "@mui/material/styles";

// Create a custom theme
const Theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Custom primary color
    },
    secondary: {
      main: "#9c27b0", // Custom secondary color
    },
    background: {
      default: "#f4f6f8", // Background color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Custom font family
    fontWeightBold: 700, // Make the font bold
    h1: {
      fontSize: "2rem", // Custom heading font size
    },
  },
  spacing: 8, // Custom spacing unit
});

export default Theme;

export const ColorPalette = {
  primary: "#DFF2EB",
  secondary: "#B9E5E8",
  tertiary: "#7AB2D3",
  quaternary: "#4A628A",
};
export const ComponentTheme = {
  border: `1px outset black`,
  backgroundColor: ColorPalette.primary,
};
