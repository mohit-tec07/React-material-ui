import React from "react";
import { Paper, Card, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  PageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#3c44b1",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function PageHeader(props) {
  const classes = useStyles();

  const { title, subTitle, icon } = props;
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.PageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
      </div>
      <div className={classes.pageTitle}>
        <Typography variant="h6" componet="div">
          {title}
        </Typography>
        <Typography variant="subTitle2" componet="div">
          {subTitle}
        </Typography>
      </div>
    </Paper>
  );
}
