import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const goTo = (event)=>{

 let choose = event.target
 console.log(choose.textContent)
 window.location.href = `./${choose.textContent}`;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection : "row",
    //justContent : "space-in-between",
    justifyContent: "center",
    justifyContent: "space-around",
    height : "10em"
    
  },
  root2: {
    display: "flex",
    flexDirection : "column",
    justContent : "space-in-between",
    justifyContent: "center",
    width : "100%",
    height : "15em",
    
    
  },
  descreption : {
     alignContent : "center",
     textAlign : "center",
     fontWeight : 700,
     marginTop : "1em",
     color : "#1D3557",
     paddingBottom: "1.5em"
  },
  item:{
    alignSelf: "center",
    fontSize: "medium",
    fontWeight: 700,
    padding: "2em",
    border: "1px solid grey",
    backgroundColor : "white",
    cursor : "pointer"
  },
  item2:{
   
    textAlign  : "center",
    alignSelf: "center",
    fontSize: "medium",
    fontWeight: 700,
    padding: "1em",
    width:"100%",
    border: "1px solid grey",
    backgroundColor : "white",
    cursor : "pointer"
  },
  socialaconainer :{
    
    color : "#1D3557",
    textAlign: '-webkit-center',
    
    
  },

 

}));



function Networkspage() {
  const matches = useMediaQuery('(min-width:600px)');
  console.log(matches)
  const classes = useStyles();  
  return (
    <div className="App">
        <Typography  className={classes.descreption} variant="h3">
        Choose A Network
        </Typography>
        
          {matches?<div className={classes.root}>
          <p onClick ={goTo} className= {classes.item}>Facebook</p>
          <p onClick ={goTo}  className= {classes.item}>Instagram</p>
          <p onClick ={goTo}  className= {classes.item}>twitter</p>
          <p onClick ={goTo}  className= {classes.item}>pintrest</p>
          </div> : <div className={classes.root2}> 
           <p onClick ={goTo} className= {classes.item2}>Facebook</p>
           <p onClick ={goTo}  className= {classes.item2}>Instagram</p>
           <p onClick ={goTo}  className= {classes.item2}>twitter</p>
           <p onClick ={goTo}  className= {classes.item2}>pintrest</p> </div>}
          
       
        </div>
  
  );
}

export default Networkspage;
