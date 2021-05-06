import "./App.css";
import React from "react";
import Sidemenu from "../components/SideMenu";
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../components/Header";

import Employess from "../Employess/Employess";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
  },
  background: { default: "#f4f5fd" },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Sidemenu />

      <div className={classes.appMain}>
        <Header />
        <Employess />

        <CssBaseline />
      </div>
    </ThemeProvider>
  );
}

export default App;
