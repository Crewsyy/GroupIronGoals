import React from 'react'


const BossStats = ({ totalLevel = '???', clueScrolls = '???', bossKills = '???' }) => {
  return (
    <div className="stats shadow ">
      <div className="stat">
        <div className="stat-title text-primary">Total Level</div>
        <div className="stat-value ">{totalLevel}</div>
      </div>
      <div className="stat">
        <div className="stat-title text-secondary">Clue Scrolls</div>
        <div className="stat-value">{clueScrolls}</div>
      </div>
      <div className="stat">
        <div className="stat-title text-accent">Boss Kills</div>
        <div className="stat-value">{bossKills}</div>
      </div>
    </div>
  )
}

export default BossStats