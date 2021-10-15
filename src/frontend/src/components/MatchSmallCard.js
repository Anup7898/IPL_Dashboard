import React from 'react';
import { Link } from 'react-router-dom';
import './MatchSmallCard.scss'

export default function MatchSmallCard({matchAdd,teamName}) {

    const otherTeam = matchAdd.team1 === teamName ? matchAdd.team2 : matchAdd.team1
    const otherTeamRoute = `/teams/${otherTeam}`
    const isMatchWon = teamName === matchAdd.winner;
    return (
        <div className={isMatchWon ? 'MatchSmallCard won-card' :'MatchSmallCard lost-card'}>
            <span className="vs">vs</span>
            <h3><Link to={otherTeamRoute}> {otherTeam}</Link></h3>
            <p className="match-result">{matchAdd.winner} won by {matchAdd.resultMargin} {matchAdd.result}</p>
        </div>
    )
}
