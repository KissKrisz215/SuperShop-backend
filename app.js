require("./db");
const express = require("express");
const authenticateJWT = require("./middleware/authMiddleware.js");

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

const couponsRoutes = require("./routes/coupons.routes.js");
app.use("/api/coupons", couponsRoutes);

const userRoutes = require("./routes/user.routes.js");
app.use("/api/user", authenticateJWT, userRoutes);

require("./error-handling")(app);
module.exports = app;
