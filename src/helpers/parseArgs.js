export function parseArgs(argv) {
  const parsedArgs = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.includes("=")) {
      const [key, value] = arg.split("=");
      parsedArgs[key.replace(/^--/, "")] = value;
    }
  }

  return parsedArgs;
}
