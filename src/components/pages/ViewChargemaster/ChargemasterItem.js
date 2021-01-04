import React from 'react'
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import "./ChargemasterItem.css"
const useStyles = makeStyles((theme) => ({
    root: {
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
     
    },
    procedure: {
       
    },
    orange:{
      color:"#FFA500"
    },
    price:{
      fontWeight: "bold",
    }
  }));
  
function ChargemasterItem(props) {  
    const classes = useStyles();
    let description=props.object.Description
    let charge=props.object.Charge
    let category=props.object.Category
    let hospitalName
    if("hospitalName" in props.object)
          hospitalName=props.object.hospitalName
             return(
              
                <Card className="chargeMasterGridItem" elevation={3} >
      <CardContent>
      <Grid container spacing={2}>
    
      <Grid item xs={8} md={8}>
      <Typography variant="subtitle1" className={classes.price}  gutterBottom >
        {description}
        </Typography>
         </Grid>     
         
      <Grid item xs={4} md={4}>
           <Typography  variant="subtitle1" className={classes.price}  gutterBottom>
           {"$ "+charge}
        </Typography>
        </Grid>
    </Grid>
        <Typography variant="subtitle2" className={classes.orange} gutterBottom >
        {category}
        </Typography>
        <Typography variant="subtitle2"  gutterBottom >
        {hospitalName}
        </Typography>
      </CardContent>
    </Card>
    )
} 

export default ChargemasterItem
