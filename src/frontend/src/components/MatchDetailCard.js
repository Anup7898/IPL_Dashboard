import React from 'react'
import { Link } from 'react-router-dom';
import './MatchDetailCard.scss'


export default function MatchDetailCard({matchAdd,teamName}) {
    if(!matchAdd) return null;
    const otherTeam = matchAdd.team1===teamName ? matchAdd.team2 : matchAdd.team1;
    const otherTeamRoute = `/teams/${otherTeam}`
    const isMatchWon = teamName ===matchAdd.winner;
    return (
        
        <div className={isMatchWon ? 'MatchDetailCard won-card' :'MatchDetailCard lost-card'}>
            <div>
            <span className="vs">vs</span>
            <h1><Link to={otherTeamRoute}> {otherTeam}</Link></h1>
            <h2 className="match-date">{matchAdd.date}</h2>
            <h3 className="match-venue">at {matchAdd.venue}</h3>
            <h3 className="match-result">{matchAdd.winner} won by {matchAdd.resultMargin} {matchAdd.result}</h3>
            </div>
            <div className="additional-detail">
            <h3>First Innings</h3>
            <p>{matchAdd.team1}</p>
            <h3>Second Innings</h3>
            <p>{matchAdd.team2}</p>
            <h3>Man Of The Match</h3>
            <p>{matchAdd.playerOfMatch}</p>
            <h3>Umpires</h3>
            <p>{matchAdd.umpire1} , {matchAdd.umpire2}</p>
            </div>
        </div>
    )
}
