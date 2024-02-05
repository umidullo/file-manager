import fs from "fs/promises";
import { join } from "path";
import { logger } from "./helpers/logger.js";

export class BasicOperations {
  navigation;

  constructor(navigation) {
    this.navigation = navigation;
  }

  async add(file) {
    try {
      const pathToFile = join(this.navigation.currentPath, file);
      await fs.writeFile(pathToFile, "", { flag: "wx" });
      logger.cwd(this.navigation.currentPath);
    } catch (error) {
      console.error(logger.failed);
    }
  }

  async rm(path) {
    try {
      //TODO add checking for relative and absolute paths
      const destination = join(this.navigation.currentPath, path);
      await fs.rm(destination);
      logger.cwd(this.navigation.currentPath);
    } catch {
      console.error(logger.failed);
    }
  }

  cat() {}
  rn() {}
  cp() {}
  mv() {}
}
