import { commands } from "../constants/commands.js";
import { logger } from "./logger.js";

export function checkCommands(cmd) {
  if (commands.includes(cmd)) {
    return;
  } else {
    throw new Error(logger.invalid);
  }
}
