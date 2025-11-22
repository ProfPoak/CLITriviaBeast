// Timer for question time limit

export function questionTimer(timeLimit) {
    timerPromise = new Promise(resolve => {
            let timeLeft = timeLimit
            const timer = setInterval(() => {
                console.log(`Time left: ${timeLeft}s`)
                timeLeft--
                
                if (timeLeft <= 0) {
                    clearInterval(timer)
                    resolve(null)
                }
            }, 1000)
        })
}