import os from "os";
import fs from "fs/promises";
import { join } from "path";
import { logger } from "./helpers/logger.js";

export class Navigation {
  currentPath = os.homedir();

  constructor() {
    if (Navigation.currentPath) return Navigation.currentPath;
    Navigation.currentPath = this;
  }

  async ls() {
    try {
      const dirents = await fs.readdir(this.currentPath, {
        withFileTypes: true,
      });

      const table = dirents
        .map((dirent) => ({
          Name: dirent.name,
          Type: dirent.isDirectory()
            ? "dictionary"
            : dirent.isFile()
            ? "file"
            : "unknown",
        }))
        .sort(
          (a, b) => a.Type.localeCompare(b.Type) || a.Name.localeCompare(b.Name)
        );
      console.table(table);
      logger.cwd(this.currentPath);
    } catch (error) {
      console.error(logger.failed);
    }
  }

  async cd(destinationPath) {
    try {
      const destination = destinationPath.includes(this.currentPath)
        ? join(destinationPath)
        : join(this.currentPath, destinationPath);

      const isPathAccessible = (await fs.stat(destination)).isDirectory();

      if (isPathAccessible) {
        this.currentPath = destination;
        logger.cwd(this.currentPath);
      } else {
        console.error(logger.failed);
      }
    } catch (error) {
      console.error(logger.failed);
    }
  }

  up() {
    this.cd("..");
  }
}
