var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [
    {
        name: "Gabi",
        phoneNumber: "123-245-1890",
        email: "gabi@test.com",
        uniqueId: 1234
    }
]

var waitingList = [
]

app.get("/", function (req, res) {
    //load home tab
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/home", function (req, res) {
    //load home tab
    res.sendFile(path.join(__dirname, "home.html"));
});

//load reservations page
app.get("/makereservation", function (req, res) {
    res.sendFile(path.join(__dirname, "makereservation.html"));
});

//load view reservations page
app.get("/reservationview", function (req, res) {
    res.sendFile(path.join(__dirname, "reservationview.html"));
});

app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitinglist", function (req, res) {
    return res.json(waitingList);
});

app.post("/api/reservations", function (req, res) {

    var newReservation = req.body;

    reservations.push(newReservation);

    res.json(newReservation);
});

app.post("/api/waitinglist", function (req, res) {

    var newReservation = req.body;

    waitingList.push(newReservation);

    res.json(newReservation);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});