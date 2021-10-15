import React from 'react'
import './TeamTile.scss';
import {Link} from 'react-router-dom'

export default function TeamTile({teamName}) {
    return (
        <div className="TeamTile">
            <h1 className="header">
                <Link to={`/teams/${teamName}`}> {teamName}</Link></h1>
        </div>
    )
}
