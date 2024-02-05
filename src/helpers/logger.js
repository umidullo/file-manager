export const logger = {
  start: (userName) =>
    console.log(`Welcome to the File Manager, ${userName}!\n`),
  close: (userName) =>
    console.log(`Thank you for using File Manager, ${userName}, goodbye!\n`),
  cwd: (path) => console.log(`You are currently in ${path}`),
  invalid: "Invalid input",
  failed: "Operation failed",
};
