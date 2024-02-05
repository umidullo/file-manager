import fs from "fs/promises";
import { logger } from "./helpers/logger.js";
import { join } from "path";
import os from "os";

export class Navigation {
  currentPath = os.homedir();

  constructor() {
    if (Navigation.currentPath) return Navigation.currentPath;
    Navigation.currentPath = this;
  }

  async ls() {
    try {
      const files = await fs.readdir(this.currentPath);
      console.table(files);
      logger.cwd(this.currentPath);
    } catch (error) {
      console.log("logCurrentDirFiles ~ error:", error);
    }
  }

  cd(destinationPath) {
    try {
      const destination = destinationPath.includes(this.currentPath)
        ? join(destinationPath)
        : join(this.currentPath, destinationPath);
      this.currentPath = destination;
      logger.cwd(this.currentPath);
    } catch (error) {
      console.log("Navigation ~ cd ~ error:", error);
    }
  }

  up() {
    this.cd("..");
  }
}
