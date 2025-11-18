import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FB6D48", // Orange accent color
      light: "#FFA07A", // Light orange
      dark: "#E55A30", // Dark orange
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
      primary: "#FB6D48", // Orange text
      secondary: "#D89580", // Muted orange
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
            boxShadow: "0px 10px 30px 0px rgba(251, 109, 72, 0.3)", // Orange shadow
            WebkitBoxShadow: "0px 10px 30px 0px rgba(251, 109, 72, 0.3)",
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
