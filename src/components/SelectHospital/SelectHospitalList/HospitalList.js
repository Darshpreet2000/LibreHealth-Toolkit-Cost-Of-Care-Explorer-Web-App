import React ,{useEffect} from "react";
import { useHistory } from "react-router-dom";
import CheckboxListSecondary from "./ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import CompareIcon from "@material-ui/icons/Compare";
import CircularProgress from "@material-ui/core/CircularProgress";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
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
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const HospitalList = (props) => {
  const [listOfData, setListOfData] = React.useState([]);
  const [hospitalNames, sethospitalNames] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const history = useHistory();
  const [displaySnackbar, setDisplaySnackbar] = React.useState(false);
  const stateName = props.stateName;
  function handleClick() {
    if (listOfData.length === 0) {
      setDisplaySnackbar(true);
    } else {
      setDisplaySnackbar(false);
      console.log("Working fine");
      history.push({
        pathname: "/search-procedure",
        state: { data: listOfData },
      });
    }
  }
  function handleChange(passedData) {
    setListOfData(passedData);
  }
  function handleClose() {
    setDisplaySnackbar(false);
  }
  useEffect(() => {
    async function fetchData() {
      var url =
        "https://gitlab.com/api/v4/projects/22718139/repository/tree?ref=master&path=" +
        stateName +
        "&per_page=100&page=";
      let i = 1;
      var response = await fetch(url + i);
      var maxLen;

      for (var pair of response.headers.entries()) {
        if (pair[0] === "x-total-pages") {
          maxLen = pair[1];
          break;
        }
      }

      response.json().then(async (responseBody) => {
        i++;
        while (i <= maxLen) {
          response = await fetch(url + i.toString());
          response.json().then((arr) => {
            responseBody.concat(arr);
          });
          i++;
        }
        let tmpArray = [];
        for (i = 0; i < responseBody.length; i++) {
          tmpArray.push({
            name: responseBody[i].name.replace(".json", ""),
            checked: false,
          });
        }

        sethospitalNames(tmpArray);
        setLoading(false);
      });
    } // Execute the created function directly
    fetchData();
  }, [stateName]);

  const classes = useStyles();
  if (loading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <CircularProgress color="secondary" />
      </div>
    );

  return (
    <Box m={2} pt={1}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
        align="center"
      ></Grid>
      <CheckboxListSecondary
        hospitalNamesList={hospitalNames}
        stateName={stateName}
        hospitalFunction={handleChange}
      />
      <Fab
        variant="extended"
        color="primary"
        className={classes.floating}
        onClick={handleClick}
      >
        <CompareIcon className={classes.extendedIcon} />
        Compare Hospital Prices
      </Fab>
      <Snackbar open={displaySnackbar} autoHideDuration={600}>
        <Alert severity="error" onClose={handleClose}>
          Please Select Atleast 1 Hospital To Compare Price{" "}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default HospitalList;
