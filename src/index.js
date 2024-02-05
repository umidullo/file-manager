#!/usr/bin/node

import { parseArgs } from "./helpers/parseArgs.js";
import { readlineHandler } from "./readLine.js";
import { logger } from "./helpers/logger.js";

function App() {
  const userName = parseArgs(process.argv.slice(2)).username ?? "Guest";

  logger.start(userName);

  readlineHandler(userName);
}

App();
