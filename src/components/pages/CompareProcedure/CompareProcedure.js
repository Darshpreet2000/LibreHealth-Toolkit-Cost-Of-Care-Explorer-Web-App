import React, { useEffect, useContext } from "react";
import NavBarOrange from "../../NavBar/NavbarOrange";
import CircularProgress from "@material-ui/core/CircularProgress";
import { HospitalContext } from "../../../context/HospitalContext";
import ChargemasterItem from "../ViewChargemaster/ChargemasterItem";
import Filter from "../../Filter/Filter";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import { Category } from "@material-ui/icons";
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
    color: "#fff",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
function CompareProcedure(match) {
  const classes = useStyles();
  const stateName = match.match.params.id;
  const [listOfData, setListOfData] = React.useState([]);
  const [originalListOfData, setoriginalListOfData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [arrayOfHospitalName] = useContext(HospitalContext);
  const [error, setError] = React.useState("");

  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [searchText, setSearchText] = React.useState("");
  const [openFilter, setOpenFilter] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    let baseUrl = `https://raw.githubusercontent.com/Darshpreet2000/API/master/${stateName}`;
    let arrayOfChargemaster = [];
    arrayOfHospitalName.forEach(async function (object) {
      const api = baseUrl + `/${object}.json`;
      try {
        let response = await fetch(api);
        if (response.ok) {
          response.json().then((responseJson) => {
            arrayOfChargemaster.push({
              hospitalName: object,
              value: responseJson,
            });
          });
        } else if (response.status === 404) {
          return Error("Error 404 Not Found");
        } else {
          return Error("some other error: " + response.status);
        }
      } catch (e) {
        setError(e.message);
      }
    });

    setoriginalListOfData(arrayOfChargemaster);
    setLoading(false);
  }, [stateName, arrayOfHospitalName]);

  let handleChange = (event) => {
    let search = event.target.value;
    setSearchText(search);
    if (search.length === 0) setListOfData([]);
    else {
      var re = new RegExp(search, "i");
      let newList = [];
      originalListOfData.forEach(function (hospital) {
        hospital.value.forEach(function (object) {
          if (object.Description.match(re)) {
            object["hospitalName"] = hospital.hospitalName;
            newList.push(object);
          }
        });
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

    if (Category === "Standard") {
      for (let i = newList.length - 1; i >= 0; --i) {
        if (newList[i].Category === "DRG") {
          newList.splice(i, 1);
        }
      }
    } else if (category === "DRG") {
      for (let i = newList.length - 1; i >= 0; --i) {
        if (newList[i].Category === "Standard") {
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
  if (error)
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
            height: "50vh",
          }}
        >
          <CircularProgress color="secondary" />
        </div>
      </div>
    );
  if (arrayOfHospitalName.length === 0)
    return (
      <div>
        <NavBarOrange />
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            height: "50vh",
          }}
        >
          Please Select Hospitals To Compare
        </h3>
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
        <div className={openFilter ? "list-ui-none" : "list-ui"}>
          <div className="filter-floating-action-button">
            <Fab
              variant="extended"
              color="secondary"
              className={classes.floating}
              onClick={handleFilterClick}
            >
              <i   style={{marginRight:'4px'}} className="fas fa-filter"></i>
           
                Filter
             
            </Fab>
          </div>
          {listOfData.length === 0 && searchText.length === 0 && (
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50vh",
              }}
            >
              Start typing procedure to search
            </h3>
          )}
          {listOfData.length === 0 && searchText.length !== 0 && (
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50vh",
                textAlign: "center",
              }}
            >
              We could not find results matching your requirement. Try changing
              filter or search query
            </h3>
          )}
          {listOfData.map(function (obj, i) {
            return <ChargemasterItem object={obj} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CompareProcedure;
