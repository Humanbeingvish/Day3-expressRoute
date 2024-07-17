"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
// Custom middleware with explicit types
var requestLogger = function (req, res, next) {
    console.log("".concat(req.method, " ").concat(req.url));
    next();
};
// Apply middleware
app.use(requestLogger);
// Define routes
app.get('/about', function (req, res) {
    res.send("This is the About page.");
});
app.get('/contact', function (req, res) {
    res.send("This is the Contact page.");
});
// Error handling middleware
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
// Start the server
app.listen(port, function () {
    console.log("Server started on http://localhost:".concat(port));
});
