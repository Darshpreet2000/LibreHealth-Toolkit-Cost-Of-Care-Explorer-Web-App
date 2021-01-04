import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import { Button,Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "./ListItem.css";
const useStyles = makeStyles((theme) => ({
  chargeMasterButton: {
    margin: "10px",
  },
  compareButton: {
    color: "#fff",
    margin: "10px",
  },
  listItemText: {
    fontSize: "1.5em", //Insert your required size
  },
  container: {
    display: "flex",
  },
}));

export default function CheckboxListSecondary(props) {
  const classes = useStyles();
  const hospitalList = props.hospitalNamesList;
 

  return (
    <List style={{ "list-style-type": "none" }}>
      <Grid container spacing={2}>
        {hospitalList.map(function (obj) {
          return (
            <Grid item xs={12} md={3} sm={4} className={classes.container}>
              <Paper
                elevation={4}
                className="list"
              >
                <Typography variant="h6" className="hospitalName" gutterBottom>
                  {` ${obj.name}`}
                </Typography>
                <Typography
                  variant="subtitle2"
                  className="address"
                  gutterBottom
                >
                  2801 Debarr Road, Anchorage, AK 99508
                </Typography>
                <div className="secondaryItem">
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.chargeMasterButton}
                  >
                    View ChargeMaster
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.compareButton}
                  >
                    Compare Price
                  </Button>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </List>
  );
}