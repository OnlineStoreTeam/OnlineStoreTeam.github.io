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
      main: "#F39324",
      light: "#FDEFDE",
      dark: "#DB8420",
      contrastText: "#FDFDFD",
    },
    secondary: {
      main: "#C8C8C8",
      dark: "#B4B4B4",
      contrastText: "#161616",
    },
    error: {
      main: "#DC362E",
      dark: "#C63129",
      width: "100%",
      backgroundColor: "transparent",
      boxShadow: "none",
      color: "#DC362E",
    },
    success: {
      main: "#389B48",
      dark: "#328C41",
      width: "100%",
      backgroundColor: "transparent",
      boxShadow: "none",
      color: "#389B48",
    },
    buttonDark: {
      backgroundColor: "#161616",
      borderRadius: 2,
      textTransform: "none",
      fontSize: "16px",
      padding: "12px 16px",
    },
    action: {
      disabled: "#FDFDFD",
      disabledBackground: "rgb(22, 22, 22, 0.4)",
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
