const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/reservations")
.then(() => console.log("Mongodb Connected"))
.catch(err => console.error(err));

const Reservation = mongoose.model("Reservation",new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    date: String,
    time: String,
    phone: String
}));
app.post("/api/reservations", async(req, res) => {
    try {
        const reservation = new Reservation(req.body);
        await reservation.save();
        res.status(201).json({ message: "Reservation Saved!" });
    } catch (err) {
        res.status(500).json({ error: "Failed to save reservation."});
    }
});
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
