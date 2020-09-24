import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Particles from "react-tsparticles";



const goToNewtrowk = ()=>{
  window.location.href = 'networks';
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: "300px",
        zIndex : "1",
        width : "100%",
        top: 0,
        left: 0,
        position: "relative",
     
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
        width: "min-content",
       /* left: 50%; */
       margin: "auto",
       backgroundColor : "white",
       border: "4px solid #e63946",
       padding: "10px",
    },
    descreption : {
       alignContent : "center",
       textAlign : "center",
       fontWeight : 700,
       marginTop : "1em",
       width: "auto",
       /* left: 50%; */
       margin: "auto",
      // border: "1px solid black",
    },
    Button:{
        marginTop : "2em",
        backgroundColor :"white",
        fontWeight : 700,
        width: "13em",
        color : "#E63946",
        height : "3em"
    },
    particles : {
      zIndex : "0",
      width : "100%",
      height : "100%",
      top: 0,
      left: 0,
      position: "absolute",
    },
 
  }));

function WelcomeBody () {
    
    const classes = useStyles();  
  return (<div>
    <Particles
    className={classes.particles}
    id="tsparticles"
    options={{
      background: {
        color: {
          value: "#F1FAEE",
        },
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "connect",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 50,
            duration: 0,
            opacity: 15,
            size: 40,
          },
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#E63946",
        },
        links: {
          color: "#E63946",
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 200,
          },
          value: 100,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: false,
    }}
  />
    <Grid container className={classes.root} >
    <Grid className={classes.leftHalf} item xs={12} md={12} lg={12} xl={12}>
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
  
    </Grid>
  </div>);
}

export default WelcomeBody;
