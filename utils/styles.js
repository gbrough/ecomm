import { createMuiTheme, makeStyles } from "@material-ui/core";

export const theme  = createMuiTheme({
  typography: {
    h1: {
      fontSize: "2.2rem",
      fontWeight: 400,
      margin: "2rem 0",
    },
    h2: {
      fontSize: "1.8rem",
      fontWeight: 400,
      margin: "1rem 0",
    },
    h3: {
      fontSize: "1.4rem",
      fontWeight: 400,
      margin: '1rem 0',
    },
  },
  palette: {
    primary: {
      main: "#f0c000",
    },
    secondary: {
      main: "#208080",
    },
    error: {
      main: "#f040000",
    },
    background: {
      default: "#ffffff",
    },
});