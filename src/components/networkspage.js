import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Facebook from '@material-ui/icons/Facebook';
import Pinterest from '@material-ui/icons/Pinterest';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';

import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",   
    marginTop :"5em",
    alignContent :"center",
    textAign: "center"
    
    
  },
  descreption : {
     alignContent : "center",
     textAlign : "center",
     fontWeight : 700,
     marginTop : "1em",
     color : "#1D3557",
  },
  item:{
     justifySelf : "center",
     backgroundColor : "#FFFFFF",
     width : "10em",
    height : "5em",
    marginTop: "1em",
    paddingTop: "1em",
    border:"1px solid #707070",
    fontWeight : 700,
    
    

  },
  socialaconainer :{
    
    color : "#1D3557",
    textAlign: '-webkit-center',
    
    
  }
 

}));



function Networkspage() {
  const classes = useStyles();  
  return (
    <div className="App">
        <Typography  className={classes.descreption} variant="h3">
        Choose A Network
        </Typography>
        <Grid container className={classes.root} >
            <Grid className={classes.socialaconainer}  item xs={12} md={3} lg={3} xl={3} >
            <div className={classes.item}>
            <List>
            <ListItem button>
            <ListItemIcon>
            <Facebook color="primary"/>
            </ListItemIcon>
             <ListItemText primary="facebook" />
            </ListItem>
            </List>
            </div>
            </Grid>
            <Grid className={classes.socialaconainer} item xs={12} md={3} lg={3} xl={3} >
            <div className={classes.item}>
            <List>
            <ListItem button>
            <ListItemIcon>
            <Pinterest  color="secondary" />
            </ListItemIcon>
             <ListItemText primary="Pinterest" />
            </ListItem>
            </List>
            </div>
            </Grid>
            <Grid className={classes.socialaconainer}  item xs={12} md={3} lg={3} xl={3} >
            <div className={classes.item}>
            <List>
            <ListItem button>
            <ListItemIcon>
            <Twitter style={{color:"#76A9EA"}}/>
            </ListItemIcon>
             <ListItemText primary="Twitter" />
            </ListItem>
            </List> 
            </div>
            </Grid>
            <Grid  className={classes.socialaconainer}  item xs={12} md={3} lg={3} xl={3} >
            <div className={classes.item}>
            <List>
            <ListItem button>
            <ListItemIcon>
            <Instagram  style={{color:"#EAB3CC"}} />
            </ListItemIcon>
             <ListItemText primary="Instagram" />
            </ListItem>
            </List> 
            </div>
            </Grid>
    

        </Grid>
    </div>
  );
}

export default Networkspage;
