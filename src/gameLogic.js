import chalk from "chalk"
import { displayQuestion, questionFeedback, finalMenu } from "./cli.js"
import { triviaQuestions, scoreKeeper, trackTime } from "./gameState.js"
import { questionTimer } from "./timers.js"
//This file holds the logic that combines and runs the various functions in order to create a game instance


export async function startGame() {
    const timerId = setInterval(() => {
        trackTime.push(1)
    }, 1000)

    for (let i = 0; i < triviaQuestions.length; i++) {
        const currentQuestion = triviaQuestions[i]
        const timeLimit = currentQuestion.timeLimit

        console.log(chalk.cyan(`Time limit: ${timeLimit} seconds`))

        const userAnswer = await Promise.race([
            displayQuestion(currentQuestion),
            questionTimer(timeLimit)
        ])

        if(userAnswer === null) {
            console.log(chalk.yellow("Time's up! Moving on"))
        }
        else{
        questionFeedback(userAnswer, currentQuestion)
        }
    }

    clearInterval(timerId)

    finalMenu(scoreKeeper)
}