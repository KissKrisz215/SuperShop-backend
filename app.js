require("./db");
const express = require("express");

const app = express();

require("./config")(app);

const allRoutes = require("./routes");
app.use("/api", allRoutes);

const authRoutes = require("./routes/auth.routes.js");
app.use("/api/auth", authRoutes);

const categoryRoutes = require("./routes/categories.routes.js");
app.use("/api/categories", categoryRoutes);

const productsRoutes = require("./routes/products.routes.js");
app.use("/api/products", productsRoutes);

require("./error-handling")(app);
module.exports = app;
