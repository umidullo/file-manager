import readline from "node:readline";
import { logger } from "./helpers/logger.js";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function readlineHandler(userName) {
  rl.on("line", (input) => {
    console.log("received: ", input);
    if (input === ".exit") {
      logger.close(userName);
      rl.close();
    }
  });
  rl.on("SIGINT", () => {
    logger.close(userName);
    rl.close();
  });
}
