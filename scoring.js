 const qbStat = (player) => {
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
   const rbStat = (player) => {
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

   }

function calculateScore(player) {
    if (player.position && 'QB' ) {
        return qbStat
}
if  (player.position && 'RB'){
    return rbStat
}





}
 module.exports = calculateScore()