import { createTheme } from "@mui/material/styles";
import "typeface-lato";

const theme = createTheme({
  shadows: [
    "none",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
    "0px 0px 0px rgba(0, 0, 0, 0)",
  ],
  palette: {
    primary: {
      main: "#000000",
      light: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
      dark: "#FFFFFF",
      contrastText: "#000000",
    },
    error: {
      main: "#DC362E",
      dark: "#C63129",
      width: "100%",
      backgroundColor: "transparent",
      boxShadow: "none",
      color: "#DC362E",
    },
    buttonDark: {
      backgroundColor: "#161616",
      borderRadius: 2,
      textTransform: "none",
      fontSize: "16px",
      padding: "12px 16px",
    },
    disabled: {
      backgroundColor: "",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    h1: {
      fontSize: "32px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "24px",
    },
    h3: {
      fontSize: "20px",
    },
    h4: {
      fontSize: "18px",
    },
    h5: {
      fontSize: "16px",
    },
    h6: {
      fontSize: "14px",
    },
  },
});

export default theme;
