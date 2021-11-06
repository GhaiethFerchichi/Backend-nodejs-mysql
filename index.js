const express = require("express");
const sequelize = require("./config/dataBase");
const app = express();

const userRouter = require("./routes/userRouter");

app.use(express.json());

app.use("/users", userRouter);

sequelize
  .sync()
  .then((res) => {
    console.log("Connection has been established successfully.");

    // console.log(res);

    app.listen(9000, () => {
      console.log("App listening on port 9000!");
    });
  })
  .catch((err) => console.log(err));
