# CLITriviaBeast

A CLI-based trivia game to demonstrate foundational JavaScript concepts, such as handling user input, managing program flow, working with arrays and objects, and building interactive terminal-based applications.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ProfPoak/CLITriviaBeast.git
cd CLITriviaBeast
```

2. Install dependencies:
```bash
npm install
```

## How to Play

### Option 1: Run with Node (Direct)

```bash
node bin/index.js
```

### Option 2: Link as a Global Command

Make the script executable:
```bash
chmod +x bin/index.js
```

Link the package globally:
```bash
npm link
```

Then run the game from anywhere:
```bash
TriviaBeast
```

## Game Rules

- Answer trivia questions within the time limit
- You have 10 seconds per question
- Get feedback on whether your answer is correct
- Your final score displays at the end
- Play as many rounds as you'd like

## Features

- 5 trivia questions with multiple choice answers
- Timed questions
- Total game time
- Score tracking