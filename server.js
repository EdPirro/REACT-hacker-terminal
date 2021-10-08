const express = require('express');
const router = require('./routes/router');
const cors = require('cors');
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());

// Serve static files need by react app
app.use(express.static(path.join(__dirname, "./view/build")));

// API routes
app.use('/api/', router);

// Send react's build
app.use("*", (_, res) => {
    res.sendFile(path.join(__dirname, "./view/build/index.html"));
});


app.listen(8000);
