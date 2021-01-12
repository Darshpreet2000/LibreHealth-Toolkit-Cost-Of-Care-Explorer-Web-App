import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "./ListItem.css";
import { Link } from "react-router-dom";
import { HospitalContext } from "../../../../context/HospitalContext";
const useStyles = makeStyles((theme) => ({
  chargeMasterButton: {
    margin: "10px",
    fontSize: "0.8em",
  },
  compareButton: {
    color: "#fff",
    margin: "10px",
    fontSize: "0.8em",
  },

  container: {
    display: "flex",
  },
  title: {
    "text-align": "center",
    "align-self": "center",
    "flex-wrap": "wrap",
    fontSize: "1.1em",
    fontWeight: 520,
  },
  address: {
    "text-align": "center",
    "align-self": "center",
    "flex-wrap": "wrap",
    fontWeight: 420,
    fontSize: "0.8em",
  },
}));

export default function ListItem(props) {
  const classes = useStyles();
  const obj = props.object;
  const setDisplaySnackbar = props.snackbarToggle;

  const [hospitalNames, setHospitalNames] = useContext(HospitalContext);

  const toggleCompare = (object) => {
    let storedHospitalNames = hospitalNames;
    if (compareButton === false && storedHospitalNames.length === 3) {
      setDisplaySnackbar("Cannot Compare more than 3 Hospitals");
      return;
    }
    if (compareButton === false) storedHospitalNames.push(object.Hospital);
    else
      storedHospitalNames.splice(
        storedHospitalNames.indexOf(object.hospitalName),
        1
      );

    setHospitalNames(storedHospitalNames);
    setCompareButton(!compareButton);
  };
  const [compareButton, setCompareButton] = useState(false);

  return (
    <Grid item xs={12} md={3} sm={4} className={classes.container}>
      <Paper elevation={4} className="list">
        <Typography variant="h6" className={classes.title} gutterBottom>
          {` ${obj.Hospital}`}
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.address}
          gutterBottom
        >
           {` ${obj.Address}, ${obj.City}`  }
        </Typography>
        <div className="secondary-item">
          <Link to={`/selectState=${props.stateName}/hospital=${obj.Hospital}`}>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.chargeMasterButton}
            >
              View ChargeMaster
            </Button>
          </Link>
          <Button
            variant="contained"
            className={classes.compareButton}
            onClick={() => toggleCompare(obj)}
            color={compareButton ? "primary" : "secondary"}
          >
            {compareButton ? "Added To Compare" : "Compare Price"}
          </Button>
        </div>
      </Paper>
    </Grid>
  );
}
