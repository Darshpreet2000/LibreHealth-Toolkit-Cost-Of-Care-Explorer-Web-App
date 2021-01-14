import React, { useEffect } from "react";
import NavBarOrange from "../../layouts/NavBar/NavbarOrange";
import CircularProgress from "@material-ui/core/CircularProgress";
import ChargeMasterList from "../../ChargeMasterList/ChargeMasterList";
import "./InpatientProcedure.css";
import Api from "../../../util/Api";
function InpatientProcedures() {
  const [loading, setLoading] = React.useState(true);
  const [listOfData, setListOfData] = React.useState([]);
  const [originalListOfData, setoriginalListOfData] = React.useState([]);
  const [error, setError] = React.useState("");

  let handleChange = (event) => {
    let newList = [];
    let search = event.target.value;
    console.log(search);
    if (search.length === 0) {
      originalListOfData.forEach(function (object) {
        newList.push(object);
      });
    } else {
      var re = new RegExp(search, "i");
      originalListOfData.forEach(function (object) {
        if (object.Description.match(re)) {
          newList.push(object);
        }
      });
    }

    setListOfData(newList);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    let apiUrl = Api.viewInpatientData;

    async function fetchData() {
      try {
        let response = await fetch(apiUrl, { crossDomain: true });
        if (response.ok) {
          response.json().then((responseJson) => {
            setListOfData(responseJson);
            setoriginalListOfData(responseJson);
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
    }
    fetchData();
  }, []);
  if (error.length > 0)
    return (
      <div>
        <NavBarOrange />
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
      </div>
    );
  if (loading)
    return (
      <div>
        <NavBarOrange />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          <CircularProgress color="secondary" />
        </div>
      </div>
    );

  return (
    <div>
      <NavBarOrange showSearchBar={true} handleChange={handleChange} />

      <div className="inpatient-list">
        <ChargeMasterList listOfData={listOfData} />
      </div>
    </div>
  );
}

export default InpatientProcedures;
