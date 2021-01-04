import React, { useEffect } from "react";
import NavBarOrange from "../../NavBar/NavbarOrange";
import CircularProgress from "@material-ui/core/CircularProgress";
import ChargemasterItem from "../ViewChargemaster/ChargemasterItem"
import "./ViewChargemaster.css" 
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
  root: {
    
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "1px",
      borderColor: "black",
    },
  },
  textField: {
    fontSize: 20, 
    
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
  useEffect(() => {
    let apiUrl = "https://raw.githubusercontent.com/Darshpreet2000/API/master/";
    apiUrl += `${stateName}/${hospitalName}.json`;
   async function fetchData(){
     try{
    let response=await fetch(apiUrl)
    if (response.ok) {
      response.json().then((responseJson) => {
        setListOfData(responseJson);
        setoriginalListOfData(responseJson)
        setLoading(false) 
      });
    } else if(response.status === 404) {
      throw Error('Error 404 Not Found')
    } else {
      throw Error('some other error: ' + response.status)
    }
  
    }catch(e){
      setError(e.message)
    }
   }
       fetchData() 
    
  }, [stateName, hospitalName]);
  let handleChange=(event)=>{
    
    let search=event.target.value
    var re = new RegExp(search, 'i');
    let newList=[]
        originalListOfData.forEach(function(object){
               if(object.Description.match(re)){
                  newList.push(object)
               }
        })
        setListOfData(newList)
  }
  if (error.length>0)
      return(
        <div>
          <NavBarOrange />
          <h3 style={{display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",}}>{error}</h3>
     
        </div>
      )
  if (loading)
    return (
      <div  >
        <NavBarOrange />
        <div style={{
        display: "flex",
        alignItems: "center",
        alignSelf:'center',
        justifyContent: "center",
        height: "80vh",
      }}>
        <CircularProgress color="secondary" />
        </div>
      </div>
    );
    return(
        <div>
        <NavBarOrange />
      

         <div className="listOfCharges">
        <div className="searchBar">
        <TextField
          id="outlined-full-width"
          label="Start typing procedure to search"
           onChange={handleChange}
          className={classes.root}
          placeholder="Search Here"
          fullWidth
          color="secondary"
          margin="normal"
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.textField,
            },
    endAdornment: (
      <InputAdornment >
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}/>
        </div>
         
         
         {listOfData.map( function(obj,i){
             return (
                     <ChargemasterItem object={obj}  key={i}/>
             )
         })}
         
         </div>
      </div>
    )
}

export default ViewChargemaster;
