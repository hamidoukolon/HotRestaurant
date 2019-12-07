var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
// app.use(express.json(waitlist));
// app.use(express.json(reservations));

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

let reservations = [
    {
        name: "Will",
        phone: 60302359,
        email: "iugnnuaoio",
        uniqueID: 234,
    }
];

let waitlist = [
    {
        name: "Kolon",
        phone: 13234,
        email: "oisngn",
        uniqueID: 345,
    }
];

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/waitlist", function (req, res) {
    res.sendFile(path.join(__dirname, "waitlist.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});



// app.get("/", function (req, res) {
//     return res.json();node
// });
app.get("/res", function (req, res) {
    return res.json(reservations);
});

app.get("/wait", function (req, res) {
    return res.json(waitlist);
});