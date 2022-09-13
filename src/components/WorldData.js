import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    //boxshadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginLeft:'2px',
    padding: theme.spacing(1),
    marginTop:"5px",
    height:'120px',
    //width:'540px',
    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", 
    textAlign:'center'
  }
}));

export default function WorldData() {
  const classes = useStyles();
  const [WorldPopulation,setWorldPopulation ]=useState();
  const [TotalCase,setTotalCase]=useState();
  const [TotalTodayCase,setTotalTodayCase]=useState();
  const [TotalDeath,setTotalDeath]=useState();
  const [TotalTodayDeath,setTotalTodayDeath]=useState();
  const [Totalrecovered,setTotalrecovered]=useState();
  const [TotalTodayrecovered,setTodayrecovered]=useState();
  const [TotalActiveCase,setActiveTodayCase]=useState();
  const [TotalCriticalCase,setCriticalCase]=useState();
  
  
  useEffect(() => {
    async function worlddata(){
        await fetch('https://corona.lmao.ninja/v2/continents?yesterday&sort').then(response=>response.json())
        .then(json=>{
            setWorldPopulation(json[0].updated)
 
            var Totalcases=0;
            var Todaycases=0;
            var deaths=0;
            var todayDeaths=0;
            var recovered=0;
            var TodayRecovered=0;
            var activecases=0;
            var criticalcases=0;
            
            for(var i=0;i<json.length;i++){
                Totalcases=Totalcases+json[i].cases;
                Todaycases=Todaycases+json[i].todayCases;
                deaths=deaths+json[i].deaths;
                todayDeaths=todayDeaths+json[i].todayDeaths;
                recovered=recovered+json[i].recovered;
                TodayRecovered=TodayRecovered+json[i].todayRecovered;
                activecases=activecases+json[i].active;
                criticalcases=criticalcases+json[i].critical;
                ;
            }
            setTotalCase(Totalcases);
            setTotalTodayCase(Todaycases);
            setTotalDeath(deaths);
            setTotalTodayDeath(todayDeaths);
            setTotalrecovered(recovered);
            setTodayrecovered(TodayRecovered);
            setActiveTodayCase(activecases);
            setCriticalCase(criticalcases);
            //setWorldData(Total); 
           })
       }
       worlddata();
      
 },[])


  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
              <h2>Total Population</h2>
              {WorldPopulation}<br />
              </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
          <h2>Total Cases Reported</h2>
          {TotalCase}<br /> 
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <h2>Total Cases Reported Today</h2>
          {TotalTodayCase}<br />
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper className={classes.paper}>
          <h3>Total Deaths Reported</h3>
          {TotalDeath}<br />     
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <h3>Total Deaths Reported Today</h3>
          {TotalTodayDeath}<br />   
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <h3>Total Patients Recovered</h3>
          {Totalrecovered}<br />   
            
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <h3>Total Patients Recovered Today</h3>
          {TotalTodayrecovered}<br />  
            
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h3>Total Active Cases</h3>
              {TotalActiveCase}<br /> 
             
              </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <h3>Total Critical Cases</h3>
          {TotalCriticalCase}<br />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
