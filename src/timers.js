// Functions in this file provide or support the timing functions in the game 


// Timer for question time limit
export function questionTimer(timeLimit) {
    const timerPromise = new Promise(resolve => {
        let timeLeft = timeLimit
        const timer = setInterval(() => {
            timeLeft--
            
            if (timeLeft <= 0) {
                clearInterval(timer)
                resolve(null)
            }
        }, 1000)
    })

    return timerPromise
    
}

// Conversion for total time elapsed during game
export function secondsConversion(trackTime) {
    const totalSeconds = trackTime.reduce((total, num) => {
            return total + num
        }, 0)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${seconds}`
}