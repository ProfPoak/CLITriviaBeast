import { number, select } from '@inquirer/prompts'
import chalk from 'chalk'
import {triviaQuestions, scoreKeeper, trackTime} from './gameState.js'
import { startGame } from './gameLogic.js'

export async function displayQuestion(triviaQuestion) {
    const userAnswer = await select({
        message: triviaQuestion.question,
        choices: triviaQuestion.answers.map((answer, index) => ({
            name: answer,
            value: index
        }))
    })

    return userAnswer
}

export function questionFeedback(userAnswer, triviaQuestion) {
    if (userAnswer === triviaQuestion.correctAnswer) {
        console.log(chalk.green("Correct!"))
        scoreKeeper[0].correct ++
    }
    else {
        console.log(chalk.red("Incorrect! The correct answer was: " + triviaQuestion.answers[triviaQuestion.correctAnswer]))
        scoreKeeper[0].incorrect ++
    }
}

export async function finalMenu(scoreKeeper) {
    const totalSeconds = trackTime.reduce((total, num) => {
        return total + num
    }, 0)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    console.log(chalk.cyan(`Total Time: ${minutes}:${seconds}`))

    console.log(chalk.cyan(`Final Score: ${scoreKeeper[0].correct}/${triviaQuestions.length}`))

    const finalInput = await select({
        message: "Thanks for playing! Would you like to play again?",
        choices: [
            {name: "Play again", value: "replay"},
            {name: "Quit", value: "quit"}
        ]
    })

    switch (finalInput) {
        case "replay":
            scoreKeeper[0].correct = 0
            scoreKeeper[0].incorrect = 0
            startGame()
            break

        case "quit":
            console.log(chalk.cyan("Goodbye!"))
            process.exit(0)
    }
}