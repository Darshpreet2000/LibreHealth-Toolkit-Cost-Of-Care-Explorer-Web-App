import React, { useEffect,useContext } from "react";
import NavBarOrange from "../../NavBar/NavbarOrange";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { HospitalContext } from "../../../context/HospitalContext";
import ChargemasterItem from "../ViewChargemaster/ChargemasterItem"
import NavbarOrange from "../../NavBar/NavbarOrange";
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
function CompareProcedure(match) {

    const classes = useStyles();
    const stateName = match.match.params.id;
    const [listOfData, setListOfData] = React.useState([]);
    const [originalListOfData, setoriginalListOfData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [arrayOfHospitalName] =  useContext(HospitalContext);
    const [error, setError] = React.useState("");
  useEffect(() => {
 
        let baseUrl = `https://raw.githubusercontent.com/Darshpreet2000/API/master/${stateName}`;
        let arrayOfChargemaster=[]
        arrayOfHospitalName.forEach(async function(object){
            const api =baseUrl+ `/${object}.json`;
         try{
           let response=await fetch(api)
           if (response.ok) {
            response.json().then((responseJson) => {
              arrayOfChargemaster.push({hospitalName:object,value:responseJson})
          });
          } else if(response.status === 404) {
            return Error('Error 404 Not Found')
          } else {
            return Error('some other error: ' + response.status)
          }
         
          }catch(e){
            setError(e.message)
          }

        })
        setoriginalListOfData(arrayOfChargemaster)
        setLoading(false)    
       
      
 
  }, [stateName,arrayOfHospitalName]);
  
    let handleChange=(event)=>{
        
        let search=event.target.value
        
        if(search.length===0)
        setListOfData([])
        else{
        var re = new RegExp(search, 'i');
        let newList=[]
            originalListOfData.forEach(function(hospital){
                  hospital.value.forEach(function(object){
                   
                    if(object.Description.match(re)){
                        object["hospitalName"]=hospital.hospitalName
                        newList.push(object)
                     }
                  })
            })
            setListOfData(newList)
          }
      }
      if (error)
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
        height: "50vh",
      }}>
        <CircularProgress color="secondary" />
        </div>
      </div>
    );
    if(arrayOfHospitalName.length===0)
    return(
      <div>
      <NavbarOrange/>
         <h3 style={{
        display: "flex",
        alignItems: "center",
        alignSelf:'center',
        justifyContent: "center",
        height: "50vh",
      }} >
         Please Select Hospitals To Compare
       </h3>
      </div>
    )
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
              <ChargemasterItem object={obj} key={i}/>
                    
             )
         })}
         
         </div>
      </div>
    )
}

export default CompareProcedure