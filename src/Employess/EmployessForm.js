import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useForm, Form } from "../components/useForm";
import Controls from "../components/controls/Controls";
import * as employeeServices from ".././services/employeeServices";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "feMale" },
  { id: "other", title: "other" },
];

const initialFValues = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  deparmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployessForm() {
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="firstName"
            lable="full Name"
            value={values.firstName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            name="email"
            lable="Email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            name="mobile"
            lable="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            name="city"
            lable="City"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            lable="gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            lable="Department"
            value={values.deparmentId}
            onChange={handleInputChange}
            options={employeeServices.getDepartmentCollection()}
          />
          <Controls.DatePicker
            name="hireDate"
            label="DATE"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.CheckBox
            name="isPermanent"
            label="PermentEmployee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Buttons type="submit" text="Submit" />
            <Controls.Buttons text="Reset" color="default" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
