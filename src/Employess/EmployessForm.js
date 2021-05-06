import { TextField, Grid, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const initialFValues = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployessForm() {
  const [values, setValues] = useState(initialFValues);
  const classes = useStyles();

  const handlefirstNameChange = (e) => {
    setValues(e.target.value);
  };

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Full NAME"
            name="firstName"
            value={values.firstName}
            onChange={handlefirstNameChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField variant="outlined" label="Email" value={values.email} />
        </Grid>
      </Grid>
    </form>
  );
}
