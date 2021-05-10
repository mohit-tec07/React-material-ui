import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import React from "react";

export default function DatePicker(props) {
  const { name, value, onChange, label } = props;

  const convertToDefEventpara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputvariant="outlined"
        labe={label}
        formate="mmm/dd/yyyy"
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefEventpara(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
}
