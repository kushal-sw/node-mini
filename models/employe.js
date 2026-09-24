const mongoose = require("mongoose");
 
const employeeSchema = new mongoose.Schema(
  {
    employeeName: { type: String, required: true },
    designation: { type: String },
    email: { type: String, required: true, unique: true },
    department: { type: String },
    salary: { type: Number },
  },
  { collection: "Employess_id" }
);
 
module.exports = mongoose.model("Employee", employeeSchema);