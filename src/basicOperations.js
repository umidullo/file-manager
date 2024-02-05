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
    } catch (error) {
      console.error(logger.failed);
    }
  }

  cat() {}
  rn() {}
  cp() {}
  mv() {}
  rm() {}
}
