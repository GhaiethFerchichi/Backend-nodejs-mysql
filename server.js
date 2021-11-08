const express = require("express");
const sequelize = require("./config/dataBase");

const app = express();

// Middleware Import
const dummyUser = require("./middlewares/dummyUser");

// Models import
const User = require("./models/Users");
const Product = require("./models/Products");

// Routes import
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const Cart = require("./models/Cart");
const CartItem = require("./models/CartItem");

// Middleware
app.use(express.json());
app.use(dummyUser);

// Routes DEF
app.use("/users", userRouter);
app.use("/products", productRouter);

// DataBase
//-- associations
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
  .sync({ force: true })
  .then(async (res) => {
    console.log("Connection has been established successfully.");
    if ((await User.findAll()).length === 0)
      return await User.findOrCreate({ where: { username: "Ghaieth" } });
  })
  .then(([user]) => user.createCart({}))
  .then(() =>
    app.listen(9000, () => console.log("App listening on port 9000!"))
  )
  .catch((err) => console.log(err));
