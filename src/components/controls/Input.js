import React from "react";
import { TextField } from "@material-ui/core";
export default function input(props) {
  const { name, lable, onChange, value } = props;
  return (
    <TextField
      variant="outlined"
      label={lable}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
