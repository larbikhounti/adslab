import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: "100%",
      height : "2em"
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 900,
      fontSize: "30px"
    },
    appBar : {
        backgroundColor : '#E63946',
        zIndex : 1,
        position : "relative"
        
    }
  }));
  

function NavigationBar() {
    const classes = useStyles();
  return (
    <div className={classes.appBar}>
      <AppBar  position="static">
        <Toolbar  className={classes.appBar}>
          
          <Typography variant="h6" className={classes.title}>
            ADSLab
          </Typography>
          <Button   color="inherit">explore</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;
