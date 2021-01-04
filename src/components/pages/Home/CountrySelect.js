/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inputRoot: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
    textDecorationColor: "#fff",

    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "1px",
      borderColor: "black",
    },
  },
});

export default function CountrySelect(props) {
  const classes = useStyles();

  return (
    <Autocomplete
      onChange={props.changeStateFunction} // prints the selected value
      id="country-select-demo"
      options={usStates}
      classes={classes}
      autoHighlight
      getOptionLabel={(option) => option}
      renderOption={(option) => <React.Fragment>{option}</React.Fragment>}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a US state"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
const usStates = [
  "Alaska",
  "Alabama",
  "Arkansas",
  "Arizona",
  "California",
  "Colorado",
  "Connecticut",
  "District of Columbia",
  "Delaware",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Iowa",
  "Idaho",
  "Illinois",
  "Indiana",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Massachusetts",
  "Maryland",
  "Maine",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Mississippi",
  "Montana",
  "North Carolina",
  "North Dakota",
  "Nebraska",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "Nevada",
  "New York",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Virginia",
  "Virgin Islands",
  "Vermont",
  "Washington",
  "Wisconsin",
  "West Virginia",
  "Wyoming",
];
