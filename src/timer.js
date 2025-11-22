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