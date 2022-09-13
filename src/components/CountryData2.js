import React,{useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { grey } from "@material-ui/core/colors";
import './CountryData.css';
import WorldData from "./WorldData";
import { Pie } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    //boxshadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginLeft:'2px',
    padding: theme.spacing(1),
    marginTop:"5px",
    //height:'740px',
    //width:'540px',
    textAlign:"center",
    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  }
}));

export default function CountryData2() {
  const classes = useStyles();
  //var b="Pakistan";
  const [Country,setCountry ]=useState("Pakistan");
  const [TotalCases2,setTotalCase2 ]=useState();
  const [TotalDeath2,setTotaldeaths2 ]=useState();
  const [TotalRecovered2,setTotalRecovered2 ]=useState();
  const [TotalActive2,setTotalActive2 ]=useState();
  const [TotalCritical2,setTotalCritical2 ]=useState();
  const [flag,setflag]=useState();

useEffect(() => {
    async function worlddata(){
        await fetch("https://corona.lmao.ninja/v2/countries/"+Country+"?yesterday&strict&query%20").then(response=>response.json())
        .then(json=>{
              setTotalCase2(json.cases);
              setTotaldeaths2(json.deaths)
              setTotalRecovered2(json.recovered);
              setTotalActive2(json.active);
              setTotalCritical2(json.critical);
              setflag(json.countryInfo.flag);
      }
      )}
       worlddata();
      
},[])



// CHART JS
const data = {
  labels: ['Total Cases', 'Total Deaths', 'Total Recovered', 'Active Cases', 'Critical Cases '],
  datasets: [
    {
      label: '# of Votes',
      data: [TotalCases2, TotalDeath2, TotalRecovered2, TotalActive2, TotalCritical2],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4} >
          <Paper id="dataGrid" className={classes.paper}>
              <img id="flagg" src={flag} />
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper id="dataGrid" className={classes.paper}>
              <h3 id="countrydataheading">Total Cases</h3>
              <b>{TotalCases2}</b>

          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper id="dataGrid" className={classes.paper}>
          <h3 id="countrydataheading">Active Cases</h3>
              <b>{TotalActive2}</b>

          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper id="dataGrid" className={classes.paper}>
              <h2>{Country}</h2>
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper id="dataGrid" className={classes.paper}>
          <h3 id="countrydataheading">Recovered</h3>
              <b>{TotalRecovered2}</b>

          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper id="dataGrid" className={classes.paper}>
          <h3 id="countrydataheading">Total Deaths</h3>
              <b>{TotalDeath2}</b>

          </Paper>
        </Grid>
        <Grid  item xs={12} >
          <Paper id="Graph_Area2" className={classes.paper}>
          <Pie id="PieChart" height="590px" data={data} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
