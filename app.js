require("./db");
const express = require("express");

const app = express();

require("./config")(app);

const allRoutes = require("./routes");
app.use("/api", allRoutes);

const userRoutes = require("./routes/routes.js");
app.use("/api", userRoutes);

const categoryRoutes = require("./routes/categories.routes.js");
app.use("/api/categories", categoryRoutes);

require("./error-handling")(app);
module.exports = app;
