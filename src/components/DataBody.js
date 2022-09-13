import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { grey } from "@material-ui/core/colors";
import WorldData from "./WorldData";
import CountryData from "./CountryData";
import CountryData2 from "./CountryData2";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    //boxshadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginLeft:'5px',
    padding: theme.spacing(1),
    marginTop:"10px",
    height:'740px',
    width:'540px',
    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  }
}));

export default function DataBody() {
  const classes = useStyles();
 

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={4} >
          <Paper className={classes.paper}>
            <WorldData />
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper className={classes.paper}>
            <CountryData />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <CountryData2 />
          </Paper>
        
        </Grid>
      </Grid>
    </div>
  );
}
