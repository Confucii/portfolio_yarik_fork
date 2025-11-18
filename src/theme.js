import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FB6D48", // Pink accent color
      light: "#F0A1DC",
      dark: "#C080B0",
    },
    secondary: {
      main: "#261F31", // Dark purple background
      light: "#332A3F",
      dark: "#1A1522",
    },
    background: {
      default: "#261F31",
      paper: "#332A3F",
    },
    text: {
      primary: "#FB6D48",
      secondary: "#B080A0",
    },
  },
  typography: {
    fontFamily: [
      "Titillium Web",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h2: {
      fontWeight: 600,
      letterSpacing: "-0.005em",
    },
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          willChange: "box-shadow", // GPU acceleration hint for Safari/iOS
          transition: "box-shadow 0.3s ease",
          WebkitBoxShadow: "0px 0px 0px 0px transparent", // Webkit prefix for older iOS
          "&:hover": {
            boxShadow: "0px 10px 30px 0px rgba(224, 145, 204, 0.3)", // Explicit units for Safari
            WebkitBoxShadow: "0px 10px 30px 0px rgba(224, 145, 204, 0.3)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
