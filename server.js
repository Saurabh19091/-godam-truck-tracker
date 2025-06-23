// server.js

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const Record = require('./models/record');

const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Atlas Connection
mongoose.connect('mongodb+srv://vehicle:vehicle123@cluster0.ohza8kd.mongodb.net/godamTracker?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("✅ MongoDB Atlas connected successfully"))
  .catch((err) => console.error("❌ MongoDB Atlas connection error:", err));


// HTML Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/view.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'view.html'));
});

app.get('/update.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'update.html'));
});

// API: Save or Update Entries
app.post('/updateData', async (req, res) => {
  const { date, godam, entries } = req.body;
  try {
    let record = await Record.findOne({ date, godam });

    if (record) {
      record.entries = entries;
    } else {
      record = new Record({ date, godam, entries });
    }

    await record.save();
    res.status(200).send('✅ Data saved successfully');
  } catch (err) {
    console.error("UpdateData Error:", err);
    res.status(500).send('❌ Server error during update');
  }
});

// API: Fetch Entries by Date
app.post('/fetch', async (req, res) => {
  const { date } = req.body;
  try {
    const records = await Record.find({ date });
    res.status(200).json(records);
  } catch (err) {
    console.error("Fetch Error:", err);
    res.status(500).send('❌ Server error during fetch');
  }
});

// API: Update Vehicle Status
app.post('/updateStatus', async (req, res) => {
  const { date, godam, vehicleNo, status } = req.body;
  try {
    const result = await Record.updateOne(
      { date, godam, 'entries.vehicleNo': vehicleNo },
      { $set: { 'entries.$.status': status } }
    );

    if (result.modifiedCount > 0) {
      res.status(200).send('✅ Status updated');
    } else {
      res.status(404).send('❌ Vehicle not found');
    }
  } catch (err) {
    console.error("UpdateStatus Error:", err);
    res.status(500).send('❌ Failed to update status');
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
