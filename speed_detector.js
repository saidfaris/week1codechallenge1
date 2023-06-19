function checkSpeed(speed){
    const speed1imit = 70
    const points = 5
    const pointsthreshhold = 12
    if (speed <= speed1imit){
        return "okay"
    
    }else {
        const excessspeed = speed - speed1imit
        const pointss = Math.floor(speed / points)
        if(points > pointsthreshhold){
            return "LICENCE CANCELED"
    
        }else {
            return "points" + points 
        }
    }
    }
    const speed =parseInt ("100")//ENTER CARSPEED
    checkSpeed(speed)
    console.log(checkSpeed(speed))