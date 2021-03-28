 function qbStat(player) {
     const qbPass = (player.stats.passing)
     const yards = ((qbPass.yards) / 25 ) 
     const touchdowns = ((qbPass.touchdowns) * 6 )
     const interceptions = ((qbPass.interceptions) * -3)
     const qbRush = (player.stats.rushing)
     const rYards = ((qbRush.yards) / 10 )
     const rTD = ((qbRush.touchdowns) * 6)
     const rFum =((qbRush.fumbles) * -3)

     


 }
   



function calculateScore(player) {
    if (player.position === 'QB'){

    }





    
module.exports = calculateScore()