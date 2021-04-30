import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";

const style = {
  sidemenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
};

const Sidemenu = (props) => {
  const { classes } = props;
  return <div className={classes.sidemenu}></div>;
};

export default withStyles(style)(Sidemenu);
