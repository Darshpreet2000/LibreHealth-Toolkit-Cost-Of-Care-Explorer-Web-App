import React from "react";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./ChargemasterItem.css";
import { Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {},
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    fontWeight: "bold",
    "font-size": "0.87em",
  },
  procedure: {},
  orange: {
    color: "#FFA500",
    "font-size": "0.85em",
  },
  blue:{
    color: "#2596be",
    "font-size": "0.85em",

  },
  price: {
    fontWeight: "bold",
    "font-size": "0.87em",
  },
  hospitalName: {
    color: "#808080",
    "font-size": "0.85em",
  },
}));

function ChargemasterItem(props) {
  const classes = useStyles();
  let description = props.object.Description;
  let charge = props.object.Charge;
  charge=parseFloat(charge).toFixed(2)
  let category = props.object.Category;
  let hospitalName;
  if ("hospitalName" in props.object) hospitalName = props.object.hospitalName;
  return (
      <Paper className="charge-master-grid-item" elevation={3}>
      
      <Grid container spacing={2}>
          <Grid item xs={8} md={8}>
            <Typography
              variant="subtitle1"
              className={classes.title}
              gutterBottom
            >
              {description}
            </Typography>
          </Grid>

          <Grid item xs={4} md={4}>
            <Typography
              variant="subtitle1"
              className={classes.price}
              gutterBottom
            >
              {"$ " + charge}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="subtitle2" className={category==='Inpatient Procedure'?classes.blue:classes.orange}>
          {category}
        </Typography>
        <Typography variant="subtitle2" className={classes.hospitalName}>
          {hospitalName}
        </Typography>
      </Paper>
  );
}

export default ChargemasterItem;
