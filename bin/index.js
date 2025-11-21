#!/usr/bin/env node

import { program } from "commander";
import { startGame } from "../src/gameLogic.js";

startGame()
program.parse(process.argv);