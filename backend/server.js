const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
    res.send("FindIt Backend Server is Running!");
});

// Test API for items
app.get("/api/items", (req, res) => {
    res.json({
        message: "FindIt Items API is working",
        items: []
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`FindIt Backend running on port ${PORT}`);
});