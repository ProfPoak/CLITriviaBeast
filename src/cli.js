import { number, select } from '@inquirer/prompts'
import chalk from 'chalk'
import {triviaQuestions, scoreKeeper, trackTime} from './gameState.js'
import { startGame } from './gameLogic.js'
import { secondsConversion } from './timers.js'
//Functions in this file handle the core display and input functions of the game

// Function to display game menu
export async function launchMenu() {
    const initialInput = await select ({
        message: "Welcome to Trivia Beast! Would you like to play?",
        choices: [
            {name: "Start Game", value: "start"},
            {name: "Quit", value: "quit"}
        ]
    })
    
    switch (initialInput) {
        case "start": // Starts game
            startGame()
            break

        case "quit": // exits the game
            console.log(chalk.cyan("Goodbye!"))
            process.exit(0)
    }
}


// Function for displaying a question and receiving an answer
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

// Takes received input from the displayed question and converts it into "correct" or "incorrect feedback". Sends a tally to the scoreKeeper
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

// Provides options for the final menu after a game has been completed
export async function finalMenu(scoreKeeper) {
    
    console.log(chalk.cyan(`Total Time: ${secondsConversion(trackTime)}`))

    console.log(chalk.cyan(`Final Score: ${scoreKeeper[0].correct}/${triviaQuestions.length}`))

    const finalInput = await select({
        message: "Thanks for playing! Would you like to play again?",
        choices: [
            {name: "Play again", value: "replay"},
            {name: "Quit", value: "quit"}
        ]
    })

    switch (finalInput) {
        case "replay": // resets trackers and starts a new loop when a player wants to replay the game
            scoreKeeper[0].correct = 0
            scoreKeeper[0].incorrect = 0
            trackTime.length = 0
            startGame()
            break

        case "quit": // exits the game
            console.log(chalk.cyan("Goodbye!"))
            process.exit(0)
    }
}