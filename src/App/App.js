import "./App.css";
import React from "react";
import Sidemenu from "../components/SideMenu";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "../components/Header";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <Sidemenu />

      <div className={classes.appMain}>
        <Header />
        <CssBaseline />
      </div>
    </>
  );
}

export default App;
