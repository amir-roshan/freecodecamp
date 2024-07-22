require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

htmlPath = __dirname + "/views/index.html";
publicPath = __dirname + "/public";
messages = { message: "Hello json" };

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "public")));

// A simple Logger Fucntion
// For the middlewares, dont forget to use next();
app.use((req, res, next) => {

    let method = req.method;
    let path = req.path;
    let ip = req.ip;

    console.log(`${method} ${path} - ${ip}`);

    next();
});

app.get("/", (req, res, next) => {
    res.sendFile(htmlPath);
});

app.route("/name").get((req, res, next) => {
    let firstName = req.query.first;
    let lastName = req.query.last;

    res.json({ name: `${firstName} ${lastName}` });
}).post((req, res, next) => {

    let firstName = req.body.first;
    let lastName = req.body.last;

    res.json({ name: `${firstName} ${lastName}` });
});

// An echo servers
app.get("/:word/echo", (req, res, next) => {
    word = req.params.word; // The captured values can be found in the req.params object.
    res.json({ echo: word });

    next();
});

// Chain Middleware to Create a Time Server
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res, next) => {
    res.json({ time: req.time });
}
);

app.get("/json", (req, res, next) => {

    // process.env.MESSAGE_STYLE === "uppercase" ? messages.message = messages.message.toUpperCase() : messages.message;

    let messageStyle = process.env.MESSAGE_STYLE;

    if (messageStyle === "uppercase") {
        messages.message = messages.message.toUpperCase();
    } else {
        messages.message;
    }
    res.json(messages);
});





































module.exports = app;
