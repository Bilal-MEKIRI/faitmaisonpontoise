const { connectToDB } = require("../utils/connectToDataBase.js");

connectToDB()
  .then(() => {
    console.log("Test completed");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Connection test failed: ", error);
    process.exit(1);
  });
