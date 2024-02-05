import readline from "node:readline";
import { logger } from "./helpers/logger.js";
import { Navigation } from "./navigation.js";
import { checkCommands } from "./helpers/checkCommands.js";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "~ ",
});

export function readlineHandler(userName) {
  const navigation = new Navigation();

  rl.on("line", (input) => {
    try {
      const cmds = input.trim().split(" ");
      const operation = cmds[0];

      checkCommands(cmds[0]);

      switch (operation) {
        case ".exit":
          logger.close(userName);
          rl.close();
          break;
        case "ls":
          navigation.ls();
          break;
        case "cd":
          navigation.cd(cmds[1]);
          break;
        case "up":
          navigation.up();
          break;
      }
    } catch (error) {
      console.error(error.message);
    }
  });

  rl.on("SIGINT", () => {
    logger.close(userName);
    rl.close();
  });
}
