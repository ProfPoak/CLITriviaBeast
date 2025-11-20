import { select } from '@inquirer/prompts'
import chalk from 'chalk'

async function displayQuestion(triviaQuestion) {
    const userAnswer = await select({
        message: triviaQuestion.question,
        choices: triviaQuestions.answers.map((answer, index) => ({
            name: answer,
            value: index
        }))
    })

    return userAnswer
}

function questionFeedback(userAnswer, triviaQuestion) {
    if (userAnswer === triviaQuestion.correctAnswer) {
        console.log(chalk.green("Correct!"))
        scoreKeeper[0].correct ++
    }
    else {
        console.log(chalk.red("Incorrect! The correct answer was: " + triviaQuestion.answers[triviaQuestion.correctAnswer]))
        scoreKeeper[0].incorrect ++
    }
}

function finalMenu(scoreKeeper) {
    console.log(chalk.cyan(`Final Score: ${ScoreKeeper[0].correct}/${triviaQuestions.length}`))

    const finalInput = ({
        message: "Thanks for playing! Would you like to play again?",
        choices: [
            {name: "Play again", value: "replay"},
            {name: "Quit", value: "quit"}
        ]
    })
}