import React, { useEffect } from "react";
import NavBarOrange from "../../layouts/NavBar/NavbarOrange";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./ViewChargemaster.css";
import Filter from "../../layouts/Filter/Filter";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import ChargeMasterList from "../../ChargeMasterList/ChargeMasterList";
import Api from "../../../util/Api";
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
    zIndex: "85",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    color: "#fff",
    textTransform: "uppercase",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function ViewChargemaster(match) {
  const classes = useStyles();
  const stateName = match.match.params.id;
  const hospitalName = match.match.params.name;

  const [loading, setLoading] = React.useState(true);
  const [listOfData, setListOfData] = React.useState([]);
  const [originalListOfData, setoriginalListOfData] = React.useState([]);
  const [error, setError] = React.useState("");
  const [openFilter, setOpenFilter] = React.useState(false);

  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [searchText, setSearchText] = React.useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    let apiUrl = Api.viewChargeMasterApi;
    apiUrl += `${stateName}%2F${hospitalName}.json/raw?ref=master`;

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
  }, [stateName, hospitalName]);
  let handleChange = (event) => {
    let newList = [];
    let search = event.target.value;
    setSearchText(search);

    if (search.length === 0) {
      originalListOfData.forEach(function (object) {
        newList.push(object);
      });
      applyFilterValues(newList);
    } else {
      var re = new RegExp(search, "i");
      originalListOfData.forEach(function (object) {
        if (object.Description.match(re)) {
          newList.push(object);
        }
      });

      applyFilterValues(newList);
    }
  };
  let applyFilterValues = (newList) => {
    if (price === "" && category === "") {
      setListOfData(newList);
      return;
    } else if (price === "Ascending") {
      newList.sort(function (a, b) {
        return a.Charge - b.Charge;
      });
    } else if (price === "Descending") {
      newList.sort(function (a, b) {
        return b.Charge - a.Charge;
      });
    }

    if (category === "Inpatient Procedure") {
      for (let i = newList.length - 1; i >= 0; --i) {
        if (newList[i].Category === "Outpatient Procedure") {
          newList.splice(i, 1);
        }
      }
    } else if (category === "Outpatient Procedure") {
      for (let i = newList.length - 1; i >= 0; --i) {
        if (newList[i].Category === "Inpatient Procedure") {
          newList.splice(i, 1);
        }
      }
    }
    setListOfData(newList);
  };

  useEffect(() => {
    const searchObj = { target: { value: searchText } };

    handleChange(searchObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price, category]);

  let handleFilterValueChanges = (priceValue, categoryValue) => {
    setPrice(priceValue);
    setCategory(categoryValue);
  };

  let handleFilterClick = () => {
    
    setOpenFilter(!openFilter);
  };
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
      <div className="list-of-charges">
        <Filter
          filterOpen={openFilter}
          handleFilterClick={handleFilterClick}
          handleFilterValueChanges={handleFilterValueChanges}
        />
        <div className="list-ui">
          <div className="filter-floating-action-button"   >
            <Fab
              variant="extended"
              color="secondary"
              className={classes.floating}
              onClick={handleFilterClick}
            >
              <i style={{ marginRight: "4px" }} className="fas fa-filter"></i>
              Filter
            </Fab>
          </div>

          <ChargeMasterList listOfData={listOfData} />
        </div>
      </div>
    </div>
  );
}

export default ViewChargemaster;
