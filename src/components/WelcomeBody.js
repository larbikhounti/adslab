import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';




const goToNewtrowk = ()=>{
  window.location.href = './networks';
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: "300px"
    },
    leftHalf : {
        textAlign: "center",   
    },
    texto : {
        paddingTop:"10em",
    },
    name :{
        color : "#E63946",
        fontWeight : 700,
    },
    descreption : {
       alignContent : "center",
       textAlign : "center",
       fontWeight : 700,
       marginTop : "1em"
    },
    Button:{
        marginTop : "2em",
        backgroundColor :"white",
        fontWeight : 700,
        width: "13em",
        color : "#E63946",
        height : "3em"
    },
 
  }));

function WelcomeBody () {
    
    const classes = useStyles();  
  return (
    <Grid container className={classes.root} >
    <Grid className={classes.leftHalf} item xs={12} md={6} lg={6} xl={6}>
        <div className={classes.texto}>
        <Typography className={classes.name} color="#E63946"  variant="h2" >
                    ADSLAB
         </Typography>
         <Typography  className={classes.descreption} variant="h6">
         Preview Your Social Advertising In
            Realtime All In One Place
         </Typography>
         
         
         <Button className={classes.Button } variant="outlined"  onClick={goToNewtrowk}>
           TRY IT
         </Button>
        
        
       

        </div>
         
    </Grid>
    <Grid item xs={12} md={6} lg={6} xl={6}>
      
    </Grid>
    </Grid>
  );
}

export default WelcomeBody;
