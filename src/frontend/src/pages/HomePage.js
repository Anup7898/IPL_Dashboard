import {React,useEffect, useState} from 'react'

import TeamTile from '../components/TeamTile';
import MatchService from '../services/MatchService';
import './HomePage.scss';


export default function HomePage() {
       

    const [teams,setTeams] =useState([]);
   

useEffect(()=>{
    getAllTeams()
},[])    

const getAllTeams = ()=>{
    MatchService.getAllIPLTeams().then((response)=>{
        setTeams(response.data)
        console.log(response.data)
    })
}

    return (
        <div className="HomePage">
           <div className="header-section"> 
               <h1 className="app-name">IPL T20 DashBoard</h1>
            </div>
            <div className="team-grid">
               {teams.map(team=><TeamTile key={team.id} teamName={team.teamName}/>)}
            </div>

          
        </div>
    )
}
