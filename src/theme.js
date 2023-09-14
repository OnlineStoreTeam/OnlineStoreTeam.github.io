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
      dark: "#969696",
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
      disabledBackground: "rgba(22, 22, 22, 0.4)",
      hoverOpacity: 0,
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    h1: {
      fontSize: "36px",
      fontWeight: 400,
    },
    h2: {
      fontSize: "28px",
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
    body1: {
      fontSize: "12px",
    },
    body2: {
      fontSize: "10px",
    },
    
  },
  breakpoints:{
    values:{
      xs: 0,
      sm: 414,
      md: 790,
      lg: 1280,
    },
  },
  spacing: 4,
  paddingX: {
    padding: '0 16px',
  },
  displayButton:{
    display: 'none',
  }
});

theme.displayButton = {
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
};

theme.paddingX = {
  [theme.breakpoints.up('xs')]: {
    padding: '0 5px',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '0 16px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0 36px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '0 56px',
  },
};
theme.typography.h1 = {
  [theme.breakpoints.up('sm')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '36px',
  },
};
theme.typography.h2 = {
  [theme.breakpoints.up('sm')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '28px',
  },
};

theme.typography.h5 = {
  [theme.breakpoints.up('sm')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '16px',
  },
};
theme.typography.h3 = {
  [theme.breakpoints.up('sm')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
  },
};
theme.typography.h4 = {
  [theme.breakpoints.up('sm')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
  },
};
export default theme;
