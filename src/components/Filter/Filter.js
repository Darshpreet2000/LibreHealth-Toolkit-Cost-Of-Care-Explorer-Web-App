import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Filter.css";
const useStyles = makeStyles((theme) => ({
  applyButton: {
    color: "#fff",
  },
}));
function Filter(props) {
  const classes = useStyles();
  const filterOpen = props.filterOpen;
  const handleFilterClick = props.handleFilterClick;
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const giveRadioValues = () => {
    props.handleFilterValueChanges(price, category);
    //if filter menu open then close it
    if (filterOpen) handleFilterClick();
  };
  const clearAllValues = () => {
    setPrice("");
    setCategory("");
    props.handleFilterValueChanges("", "");
    //if filter menu open then close it
    if (filterOpen) handleFilterClick();
  };
  const css = `
    .nav-bar-orange {
         display: none;
    }
    .footer {
      display: none;
     }
     
    `;
  return (
    <div className={filterOpen === false ? "filter" : "filter-mobile-open"}>
      {filterOpen === true && <style>{css}</style>}

      <div className="filter-content">
        <div className="filter-heading">
          <div className="filter-icon">
            <i className="fas fa-filter"></i>
          </div>
          <span className="filter-text"> Filter</span>
          <div className="filter-icon-close" onClick={handleFilterClick}>
            <i className="fas fa-times-circle"></i>
          </div>
        </div>
        <div className="category-content">
          <FormControl >
            <span id="filter-option"> Category</span>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={category}
              onChange={handleCategoryChange}
            >
              <FormControlLabel
                value="Inpatient Procedure"
                control={<Radio />}
                label="Inpatient Procedures"
              />
              <FormControlLabel
                value="Outpatient Procedure"
                control={<Radio />}
                label="Outpatient Procedures"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="price-content">
          <FormControl >
            <span id="filter-option"> Order By Price</span>
            <RadioGroup
              aria-label="price"
              name="price"
              value={price}
              onChange={handlePriceChange}
            >
              <FormControlLabel
                value="Ascending"
                control={<Radio />}
                label="Ascending"
              />
              <FormControlLabel
                value="Descending"
                control={<Radio />}
                label="Descending"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="filter-buttons">
          <Button variant="outlined" color="secondary" onClick={clearAllValues}>
            Clear All
          </Button>
          <Button
            variant="contained"
            className={classes.applyButton}
            color="secondary"
            onClick={giveRadioValues}
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
