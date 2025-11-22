import { displayQuestion, questionFeedback, finalMenu } from "./cli.js"
import { triviaQuestions, scoreKeeper, trackTime } from "./gameState.js"
import { questionTimer } from "./timer.js"

export async function startGame() {
    const timerId = setInterval(() => {
        trackTime.push(1)
    }, 1000)

    for (let i = 0; i < triviaQuestions.length; i++) {
        const currentQuestion = triviaQuestions[i]
        const timeLimit = currentQuestion.timeLimit

        const userAnswer = await Promise.race([
            displayQuestion(currentQuestion),
            questionTimer(timeLimit)
        ])

        if(userAnswer === null) {
            console.log(chalk.orange("Time's up! Moving on"))
        }
        else{
        questionFeedback(userAnswer, currentQuestion)
        }
        
        await new Promise(resolve => setTimeout (resolve, 2000))
    }

    clearInterval(timerId)

    finalMenu(scoreKeeper)
}