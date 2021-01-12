import React from "react";
import orangeLogo from "../../img/librehealth.png";
import { useState } from "react";
import "./NavBarOrange.css";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    
    },
  },
  textField: {},
}));
function NavBarOrange(props) {
  const classes = useStyles();
  let showSearchBar = false;
  showSearchBar = props.showSearchBar;
  let handleChange = props.handleChange;
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }

  return (
    <nav className="nav-bar-orange">
      <Link to="/" style={{marginBottom: '8px',marginTop: '2px'}}>
        <img src={orangeLogo} alt="logo" />
      </Link>
      <div className="nav-menu-orange" onClick={handleClick}>
        <i className="fa fa-bars"></i>
      </div>
      <div
        className={
          showSearchBar === true ? "search-bar" : "search-bar-no-display"
        }
      >
        <TextField
          variant="outlined"
          size="small"
          id="outlined-full-width"
          onChange={handleChange}
          fullWidth
          className={classes.root}
          placeholder="Start typing procedure to search"
          color="secondary"
          InputProps={{
            classes: {
              input: classes.textField,
            },
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <ul className={open ? "open-nav-items-orange" : "nav-items-orange"}>
        <div className="nav-close-menu-orange" onClick={handleClick}>
          <i className="fas fa-times"></i>
        </div>
        <Link to="/inpatient-procedures"className="list-item-orange">
        Inpatient Procedure
        </Link>
        <Link to="/outpatient-procedures"className="list-item-orange">
        Outpatient Procedure
        </Link>
        <Link to="/glosary" className="list-item-orange">
          Glossary
        </Link>
        <Link to="/about" className="list-item-orange">
          About Us
        </Link>
       
      </ul>
    </nav>
  );
}

export default NavBarOrange;
