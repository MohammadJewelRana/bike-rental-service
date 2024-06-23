/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import { Server } from "http";


let server:Server;


async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    //here config.port comes from index.js file
    server=app.listen(config.port, () => {
      console.log(`Bike service app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();

