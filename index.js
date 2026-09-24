const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/employe");
const app = express();
const PORT = 5000;
const MONGO_URI = "mongodb://127.0.0.1:27017/";
app.use(express.json());
app.get("/send", async (req, res) => {
  try {
    const employees = await Employee.find().select("-__v").lean();
     return res.status(200).json({
      success: true,
      message: "Employees fetched successfully",
      count: employees.length,
      data: employees,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch employees",
      error: error.message,
    });
  }
});
mongoose
  .connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));