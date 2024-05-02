import React, { useState } from 'react'
import BossStats from './bossStats'
import { searchPlayer } from '../api/searchAPI'

const HeroSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [playerStats, setPlayerStats] = useState(null)
  const [error, setError] = useState(null)

  const handleSearch = async () => {
    try {
      const data = await searchPlayer(searchTerm)
      setPlayerStats(data)
      setError(null)
    } catch (error) {
      setPlayerStats(null)
      setError(error.message)
    }
  }

  const calculateTotalBossKills = (bossStats) => {
    let totalBossKills = 0
    for (const boss in bossStats) {
      if (bossStats[boss].score > 0) {
        totalBossKills += bossStats[boss].score
      }
    }
    return totalBossKills
  }

  return (
    <div className="hero min-h-screen bg-base-200 z-0">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Search your RSN in the search box below!</p>
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter your RSN"
              className="input input-bordered w-24 md:w-auto"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  handleSearch()
                }
              }}
            />
          </div>
          <div className="py-6">
            {playerStats && (
              <BossStats
                totalLevel={playerStats.skills.overall.level}
                clueScrolls={playerStats.clues.all.score}
                bossKills={calculateTotalBossKills(playerStats.bosses)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSearch
