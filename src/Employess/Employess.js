import React from "react";
import EmployessForm from "./EmployessForm";
import PageHeader from "../components/PageHeader";
import PeopleIcon from "@material-ui/icons/People";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Employess() {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="New employ"
        subTitle="form desing validation"
        icon={<PeopleIcon />}
      />
      <Paper className={classes.pageContent}>
        <EmployessForm />
      </Paper>
    </>
  );
}
