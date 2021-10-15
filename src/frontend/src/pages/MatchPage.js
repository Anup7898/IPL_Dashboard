import {React,useEffect, useState} from 'react'
import { useParams } from 'react-router';
import MatchDetailCard from '../components/MatchDetailCard'
import MatchSmallCard from '../components/MatchSmallCard'
import { YearSelector } from '../components/YearSelector';
import MatchService from '../services/MatchService';
import './MatchPage.scss'

export default function MatchPage() {

    const[matches,setMatches]=useState([])
    const {teamName,year} = useParams();

    useEffect(()=>{
        getMatches(teamName,year)
    },[teamName,year])    
    
    const getMatches = ()=>{
        MatchService.getMatches(teamName,year).then((response)=>{
            setMatches(response.data)
            console.log(response.data)
        })
    }

    return (
        <div className="MatchPage">
            <div className="year-selector">
                <h3>Select Year </h3>
                <YearSelector teamName={teamName}/>
            </div>
            <div>
            <h1 className="page-heading">{teamName} matches in {year}</h1>
            {
            matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} matchAdd={match}/>)
            }
            </div>
        </div>
    )
}
