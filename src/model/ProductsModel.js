const mongoose = require("mongoose");
const dataSchema = mongoose.Schema(
  {
    FirstName: { type: String },
    LastName: { type: String },
    Address: { type: String },
    Gender: { type: String },
    DateOfBirth: { type: String },
    Nationality: { type: String },
    Email: { type: String },
    Phone: { type: String },
    AdmissionDate: { type: String },
    Courses: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const ProductsModel = mongoose.model("Student", dataSchema);
module.exports = ProductsModel;
