import React,{useState,useEffect} from 'react'

function WorldComponent() {
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
             //setWorldData(Total); 
            })
        }
        worlddata();
       
 },[])

 
    return (
        <div>
            {WorldPopulation}<br />
            {TotalCase}<br />
            {TotalTodayCase}<br />
            {TotalDeath}<br />     
            {TotalTodayDeath}<br />   
            {Totalrecovered}<br />   
            {TotalTodayrecovered}<br />  
            {TotalActiveCase}<br /> 
            {TotalCriticalCase}<br />  

        </div>
    )
}


export default WorldComponent
