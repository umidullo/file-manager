import os from "os";
import { logger } from "./helpers/logger.js";
import { Navigation } from "./navigation.js";

export function getOsInfo(cmd) {
  const navigation = new Navigation();
  const cpus = os.cpus().map((cpu, index) => {
    const model = cpu.model;
    const speedInGHz = (cpu.speed / 1000).toFixed(2);
    return { CPU: index + 1, Model: model, Clock_Rate: speedInGHz };
  });

  switch (cmd) {
    case "--EOL":
      console.log(`Default End-Of-Line character: '${defaultEOL}'`);
      logger.cwd(navigation.currentPath);
      break;
    case "--cpus":
      console.table(cpus);
      logger.cwd(navigation.currentPath);
      break;
    case "--homedir":
      console.log(os.homedir());
      logger.cwd(navigation.currentPath);
      break;
    case "--username":
      console.log(os.userInfo().username);
      logger.cwd(navigation.currentPath);
      break;
    case "--architecture":
      console.log(process.arch);
      logger.cwd(navigation.currentPath);
      break;
    default:
      console.log(logger.failed);
      break;
  }
}
