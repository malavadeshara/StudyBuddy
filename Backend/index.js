// APP Creation
const express = require("express");
const app = express();
const userRoutes = require("./Routes/user.routes")

// PORT Configuration
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Database Connection
const db = require("./Config/database");
db.connect();

// Server Activation
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/user", userRoutes);