#!/usr/bin/node

import { parseArgs } from "./helpers/parseArgs.js";
import { readlineHandler } from "./readLine.js";
import { logger } from "./helpers/logger.js";
import { Navigation } from "./navigation.js";

function App() {
  const userName = parseArgs(process.argv.slice(2)).username ?? "Guest";

  const navigation = new Navigation();

  logger.start(userName);
  logger.cwd(navigation.currentPath);

  readlineHandler(userName);
}

App();
