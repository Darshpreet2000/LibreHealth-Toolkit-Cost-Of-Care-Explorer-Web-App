import React ,{useContext,useState}from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button,Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "./ListItem.css";
import {  useHistory } from "react-router-dom";
import { HospitalContext } from "../../../../context/HospitalContext";
const useStyles = makeStyles((theme) => ({
  chargeMasterButton: {
    margin: "10px",
  },
  compareButton: {
    color: "#fff",
    margin: "10px",
  },
  listItemText: {
    fontSize: "1.5em", //Insert your required size
  },
  container: {
    display: "flex",
  },
}));

export default function ListItem(props) {
  const classes = useStyles();
  const obj = props.object
  const setDisplaySnackbar=props.snackbarToggle

  const [hospitalNames, setHospitalNames] =  useContext(HospitalContext);
  const history = useHistory();
  const viewChargeMaster=(hospitalName)=>{
  
    history.push(`/selectState=${props.stateName}/hospital=${hospitalName}`);
  } 
  const toggleCompare=(object)=>{
      let storedHospitalNames=hospitalNames
      if(compareButton===false&&storedHospitalNames.length===3){

        setDisplaySnackbar("Cannot Compare more than 3 Hospitals")
        return
      }
      if(compareButton===false)
      storedHospitalNames.push(object.name)
     else
        storedHospitalNames.splice(storedHospitalNames.indexOf(object.hospitalName),1)
     
      setHospitalNames(storedHospitalNames)
      setCompareButton(!compareButton)
  } 
  const [compareButton,setCompareButton]= useState(false)
  
            return (
              <Grid item xs={12} md={3} sm={4} className={classes.container}>
                <Paper
                  elevation={4}
                  className="list"
                >
                  <Typography variant="h6" className="hospitalName" gutterBottom>
                    {` ${obj.name}`}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className="address"
                    gutterBottom
                  >
                    2801 Debarr Road, Anchorage, AK 99508
                  </Typography>
                  <div className="secondaryItem">
                    <Button
                      variant="outlined"
                      color="secondary"
                      className={classes.chargeMasterButton}
                      onClick={()=>{viewChargeMaster(obj.name)}}
                    >
                      View ChargeMaster
                    </Button>
                    <Button
                      variant="contained"

                      className={classes.compareButton}
                      onClick={()=>toggleCompare(obj)}
                     color={compareButton?"primary":"secondary"}
                   
                    >
                    {compareButton?"Added To Compare":"Compare Price"}
                    </Button>
                  </div>
                </Paper>
              </Grid>
            );


}