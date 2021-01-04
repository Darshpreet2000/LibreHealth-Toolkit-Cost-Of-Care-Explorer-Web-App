import React, {useContext, useEffect } from "react";
import "./Home.css";
import CountrySelect from "./CountrySelect";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import NavBar from "../NavBar/NavBar.js";
import { HospitalContext } from "../../context/HospitalContext";
import {  useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {},
}));
function Home() {
  const classes = useStyles();
  const [stateName, setStateName] = useContext(HospitalContext);
  const history = useHistory();
  function changeState(evt, value) {
    console.log(stateName);
    if (value == null) {
      setStateName("");
    } else setStateName(value);
  }
  useEffect(() => {
    setStateName(stateName);
  }, [stateName,setStateName]);

  const searchHospitals = () => {
    history.push(`/selectState=${stateName}`);
  };

  return (
    <div className="homePage">
      <div className="hold">
        <NavBar />
        <h1>Compare Costs Of Medical Procedures Of US Hospitals</h1>
        <h3>
          Search over 3000 U.S. hosptals by region and drill down into the
          diagnosis costs. Search inpatient procedures or outpatient procedures
          to compare costs across hospitals.
        </h3>
        <div className="stateSelect">
          <Card className={classes.root} elevation={3}>
            <CardContent>
              <CountrySelect changeStateFunction={changeState} />
              <div className="searchHospital">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={searchHospitals}
                >
                  Search Hospitals
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="introduction">
        <h1>Hospital pricing transparency</h1>

        <hr />
      </div>
      <div className="introData">
        <p>
          Recent changes in Medicare’s payment policies under the inpatient
          prospective payment system (PPS) and the long-term care hospital PPS
          required that the CDM be made available in a machine-readable format
          by January 1, 2019 . These formats are in XML or CSV and while machine
          readable do not make sense for a patient who is comparing the prices
        </p>
        <p>
          The Goal of this LibreHealth Cost Of Care Explorer Project is to
          provide patient friendly costs of care, to help patients get better
          cost estimates for medical procedures of US Hospitals. User can view
          the chargemaster, search for a particular procedure in multiple
          hospitals chargemasters & can sort data by Category or sort by price
          in ascending or descending order.
        </p>
      </div>
    </div>
  );
}

export default Home;