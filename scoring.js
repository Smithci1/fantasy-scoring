



 const qbStats = (player) => {
     const Pass = player.stats.passing
     const yards = Pass.yards / 25  
     const touchdowns = Pass.touchdowns * 6 
     const interceptions = Pass.interceptions * -3
     const Rush = player.stats.rushing
     const rYards = Rush.yards / 10 
     const TD = Rush.touchdowns * 6
     const Fum = Rush.fumbles * -3
     return sum [yards + touchdowns + interceptions + rYards + TD + Fum]
    }     
    const rbStats = (player) => {
        const Rush = player.stats.rushing
        const Yards = Rush.yards / 10
        const TD = Rush.touchdowns * 6
        const Fum = Rush.fumbles * -3
        const receiving = player.stats.receiving
        const rec = receiving.receptions * 1
        const rYards = receiving.yards / 10
        const rtouchdowns = receiving.touchdowns * 6
        const rFum = receiving.fumbles * -3
        const kReturns = player.stats.return.kickreturn
        const pReturns = player.stats.return.puntreturn
        const krYards = kReturns.yards / 10
        const krTD = kReturns.touchdowns * 6
        const krFum = kReturns.fumbles * -3
        return sum [Yards + TD + Fum + rec + rYards + rtouchdowns + rFum + krYards + krTD + krFum]
        
    }  
    const wrStats = (player) => {
        const Rush = player.stats.rushing
        const Yards = Rush.yards / 10
        const TD = Rush.touchdowns * 6
        const Fum = Rush.fumbles * -3
        const receiving = player.stats.receiving
        const rec = receiving.receptions * 1
        const rYards = receiving.yards / 10
        const rtouchdowns = receiving.touchdowns * 6
        const rFum = receiving.fumbles * -3
        const kReturns = player.stats.return.kickreturn
        const pReturns = player.stats.return.puntreturn
        const krYards = kReturns.yards / 10
        const krTD = kReturns.touchdowns * 6
        const krFum = kReturns.fumbles * -3
        const prYards = pReturns.yards / 10
        const prTD = pReturns.touchdowns * 6
        const prFum = pReturns.fumbles * -3
        return sum [Yards + TD + Fum + rec + rYards + rtouchdowns + rFum + krYards + krTD + krFum + prYards + prTD + prFum]
    }
    const teStats = (player) => {
        const receiving = player.stats.receiving
        const rec = receiving.receptions * 1
        const rYards = receiving.yards / 10
        const rtouchdowns = receiving.touchdowns * 6
        const rFum = receiving.fumbles * -3
        return sum [rec + rYards + rtouchdowns + rFum]


    }
    
    
    const calculateScore = (player) => {
        if (player.position === 'QB'){
            return qbStats
    
        }else if (player.position === 'RB'){
                return rbStats
            }else if (player.position === 'WR'){
                return wrStats
        }else if (player.position === 'TE'){
            return teStats
        }else (player.position === 'K')
        return 'false'
    }


module.exports = calculateScore()