import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "10em"

  },
  FirstTwoInputs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: "5em",

  },
  input: {
    display: 'none',
  },
  back: {
    marginBottom: "0.5em",

  },
  textField: {
    backgroundColor: "#F1FAEE",
    color: "black",
    fontWeight: 900
  },
  root2: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  header: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    padding: "1em",

  },
  root3: {
    padding: "5em"
  },
  username: {
    fontWeight: 700,

  },
  sponsored: {
    fontWeight: 200,
    fontStyle: "italic",
    fontSize: "small",
  },
  descreptions: {
    backgroundColor: "white",
    alignSelf: " center",
    fontSize: "15px",
    padding: "10px 0px 10px 10px",
    margin: "0px",

  },
  image: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover"
  },
  footer : {
      backgroundColor : "#F0F2F5",
      display: "flex",
      flexDirection : "row",
      justifyContent : "space-between"
  },
  footertitle: {
    fontWeight: 650,
  },
  website : {
    color :"grey"
  },
  buttonAction :{
    margin: "5px",
    fontSize: "small",
    fontWeight: 700,
    backgroundColor : "#CFD2D6"
  }




}));


function Facebook() {
  let [url, setUrl] = useState("");
  const classes = useStyles();
  const saveimage = (event) => {

    console.log(URL.createObjectURL(event.target.files[0]))
    setUrl(URL.createObjectURL(event.target.files[0]))
  }

  //const classes = useStyles();  
  return (

    <Grid container className={classes.root}>
      <Grid item md={6}>
        <div className={classes.FirstTwoInputs}>
          <TextField className={classes.back} id="standard-basic" label="Page Name" />
          <TextField className={classes.back} id="standard-textarea" label="Descreption" placeholder="Descreption " multiline />
          <div className={classes.back}>
            <Typography color="primary" > choose an image</Typography>
            <input onChange={saveimage} accept="image/*" className={classes.input} id="contained-button-file"
              multiple
              type="file"
            />

            <label className={classes.back} htmlFor="contained-button-file">
              <Button className={classes.back} startIcon={<CloudUploadIcon />} variant="contained" color="primary" component="span">
                Upload
          </Button>
            </label>
          </div >
          <TextField
            className={classes.textField}
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax={4}

            variant="filled"
          />
          <TextField label="Button Text" className={classes.textField}
            margin="normal"
            variant="filled"
          />
          <TextField label="Website Name" className={classes.textField}
            margin="normal"
            variant="filled"
          />
        </div>
      </Grid>

      <Grid className={classes.root3} item md={6}>
        <div style={{ backgroundColor: "white" }} >
          <div className={classes.header}>
            <Avatar />
            <div style={{ paddingLeft: "5px" }} >
              <Typography className={classes.username}>Simokhounti</Typography>
              <Typography className={classes.sponsored} >Sponsored</Typography>
            </div>
          </div>
          <p className={classes.descreptions} >
            At w3schools.com you will learn how to make a website.
             We offer free tutorials in all web development technologies.
           </p>
          <img className={classes.image} src="https://i.pinimg.com/originals/ca/a2/65/caa2654e79e2dc88c6a3c18e1a353452.jpg" />
        </div>
        <div>
          <div className={classes.footer}> 
            <div style={{ paddingLeft: "1em" }} >
              <Typography className={classes.website} >www.google.com</Typography>
              <Typography className={classes.footertitle}>try it now </Typography>
            </div>
            <Button className = {classes.buttonAction}> download</Button>
          </div>
        </div>
      </Grid>
    </Grid>

  );
}

export default Facebook;
