import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    //here config.port comes from index.js file
    app.listen(config.port, () => {
      console.log(`Bike rental services listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
