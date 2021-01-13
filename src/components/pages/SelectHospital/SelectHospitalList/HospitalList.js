import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import ListItem from "./ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import CompareIcon from "@material-ui/icons/Compare";
import CircularProgress from "@material-ui/core/CircularProgress";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import List from "@material-ui/core/List";
import { HospitalContext } from "../../../../context/HospitalContext";
import Api from "../../../../util/Api";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "justify-content": "space-between",
    padding: theme.spacing(2),
  },

  card: {
    flexDirection: "row",
  },
  floating: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),textTransform: "uppercase"
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const HospitalList = (props) => {
  const [hospitalNames, sethospitalNames] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const history = useHistory();
  const [displaySnackbar, setDisplaySnackbar] = React.useState("");
  const stateName = props.stateName;
  const [hospitalNamesToCompare, setHospitalNamesToCompare] = useContext(
    HospitalContext
  );
  function handleClick() {
    if (hospitalNamesToCompare.length === 0) {
      setDisplaySnackbar("Please Select Atleast 1 Hospital To Compare");
    } else {
      history.push(`/selectState=${stateName}/compare`);
    }
  }

  function handleClose() {
    setDisplaySnackbar("");
  }
  useEffect(() => {
    setHospitalNamesToCompare([]);
    async function fetchData() {
      let url = Api.listHospitalApi;
      url += `${stateName}%2Faddress.json/raw?ref=master`;

      try {
        var response = await fetch(url);

        if (response.ok) {
          response.json().then((responseJson) => {
            sethospitalNames(responseJson);
            setLoading(false);
          });
        } else if (response.status === 404) {
          throw Error("Error 404 Not Found");
        } else {
          throw Error("some other error: " + response.status);
        }
      } catch (e) {
        setError(e.message);
      }
    } // Execute the created function directly
    fetchData();
  }, [stateName, setHospitalNamesToCompare]);

  const classes = useStyles();
  if (error)
    return (
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        {error}
      </h3>
    );

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        <CircularProgress color="secondary" />
      </div>
    );

  return (
    <Box m={2} pt={1}>
      {hospitalNames.length > 0 && <h2>Available Hospitals for {stateName}</h2>}
      {hospitalNames.length === 0 && (
        <h2>No Hospitals found for {stateName}</h2>
      )}

      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
        align="center"
      ></Grid>
      <List style={{ listStyleType: "none" }}>
        <Grid container spacing={2}>
          {hospitalNames.map(function (object, i) {
            return (
              <ListItem
                object={object}
                stateName={stateName}
                snackbarToggle={setDisplaySnackbar}
                key={i}
              />
            );
          })}
        </Grid>
      </List>
      <Fab
        variant="extended"
        color="primary"
        className={classes.floating}
        onClick={handleClick}
      >
        <CompareIcon className={classes.extendedIcon} />
        Compare Hospital Prices
      </Fab>
      <Snackbar
        open={displaySnackbar.length > 0}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity="error" onClose={handleClose}>
          {displaySnackbar}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default HospitalList;
