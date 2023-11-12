const express = require("express");
const db = require("./models/index");
const app = express();
const { config } = require("dotenv");
const userRoute = require("./routes/user.route");
const bodyParser = require("body-parser");
const cors = require("cors");
config();
const PORT = process.env.PORT;

async function testConnection() {
  try {
    await db.sequelize.authenticate();
    console.log("Connected to database successfully");
  } catch (error) {
    console.log("Enable to connect database", error);
  }
}
app.use(cors());
app.use(bodyParser.json());
app.use("/", userRoute);

app.listen(PORT, async () => {
  await testConnection();
  console.log("server is running", PORT);
});
