import fs from "fs";
import crypto from "crypto";

export async function hash(pathToFile) {
  try {
    const input = fs.createReadStream(pathToFile);
    const hash = crypto.createHash("sha256");

    input.pipe(hash).on("finish", () => {
      console.log(hash.digest("hex"));
    });
  } catch (error) {
    console.log("Operation failed");
  }
}
