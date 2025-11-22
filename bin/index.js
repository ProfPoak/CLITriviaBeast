#!/usr/bin/env node

import { program } from "commander";
import { launchMenu } from "../src/cli.js";

launchMenu()

program.parse(process.argv);