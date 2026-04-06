const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/eventDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

const User = require("./models/user");

const Event = require("./models/event");
// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Serve users.html
app.get("/users-page", (req, res) => {
  res.sendFile(path.join(__dirname, "users.html"));
});

// Register new user
app.post("/register", async (req, res) => {
  try {
    const { name, email, event, year } = req.body;
    const user = new User({ name, email, event, year });
    await user.save();
    res.json({ message: "Registered successfully ✅" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving data");
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Check-in route
app.patch("/users/:id/checkin", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
        checkedInAt: req.body.status === "checked-in" ? new Date() : null
      },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Check-in failed" });
  }
});

app.get("/registrations-page", (req, res) => {
  res.sendFile(path.join(__dirname, "registrations.html"));
});

app.get("/events-page", (req, res) => {
  res.sendFile(path.join(__dirname, "events.html"));
});

app.get("/analytics-page", (req, res) => {
  res.sendFile(path.join(__dirname, "analytics.html"));
});

app.get("/analytics", async (req, res) => {
  try {
    const users = await User.find();

    const total = users.length;

    const checked = users.filter(u => u.status === "checked-in").length;

    const events = {};
    users.forEach(u => {
      events[u.event] = (events[u.event] || 0) + 1;
    });

    res.json({
      total,
      checked,
      pending: total - checked,
      events
    });

  } catch (err) {
    res.status(500).json({ error: "Analytics failed" });
  }
});

app.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

app.post("/add-event", async (req, res) => {
  try {
    const { name } = req.body;

    const newEvent = new Event({ name });
    await newEvent.save();

    res.json({ message: "Event added successfully ✅" });

  } catch (err) {
    res.status(500).json({ error: "Failed to add event" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});

