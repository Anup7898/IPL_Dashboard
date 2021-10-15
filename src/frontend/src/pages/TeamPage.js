import {React,useEffect, useState} from 'react'
import { useParams } from 'react-router';
import MatchDetailCard from '../components/MatchDetailCard'
import MatchSmallCard from '../components/MatchSmallCard'
import MatchService from '../services/MatchService';
import './TeamPage.scss';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from "react-router-dom";


export default function TeamPage() {
       

    const [team,setTeam] =useState({matches:[]});
    const {teamName} = useParams();

useEffect(()=>{
    getTeamNames(teamName)
},[teamName])    

const getTeamNames = ()=>{
    MatchService.getTeamName(teamName).then((response)=>{
        setTeam(response.data)
        console.log(response.data)
    })
}

    return (
        <div className="TeamPage">
           <div className="team-name-section"> 
               <h1 className="team-name">{team.teamName}</h1>
            </div>

           <div className="win-loss-section">
               Wins / Losses 

               <PieChart
                   data={[
                        { title: 'Wins', value: team.totalWins, color: '#4da375' },
                        { title: 'Losses', value: team.totalMatches-team.totalWins, color: '#a34d5d' }
                        ]}/>
            </div>
           <div className="match-detail-section">
               <h3>Latest Matches</h3>
                <MatchDetailCard teamName={team.teamName} matchAdd={team.matches[0]}/>
            </div>
            {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} matchAdd={match}/>)}
            <div className="more-link">
            <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More ></Link>
                
            </div>
        </div>
    )
}
