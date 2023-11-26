const mongoose = require("mongoose");
const ProductsModel = require("../model/ProductsModel");

//C=Create

exports.CreateStudent = async (req, res) => {
  const reqBody = req.body;

  try {
    const data = await ProductsModel.create(reqBody);
    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res
      .status(400)
      .json({ status: "fail", error: err.message || "Unknown error" });
  }
};

//R=Read

exports.ReadStudent = async (req, res) => {
  try {
    let Query = {};
    let projection = "FirstName, LastName,Address,Gender, DateOfBirth,Nationality,Email,AdmissionDate,Courses";
    let data = await ProductsModel.find();

    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res
      .status(400)
      .json({ status: "fail", error: err.message || "Unknown error" });
  }
};

//U=Update

exports.UpdateStudent = async (req, res) => {
  try {
    let id = req.params.id;
    let Query = { _id: id };
    let reqBody = req.body;
    console.log(reqBody);

    // Using async/await with the promisified version of updateOne
    let data = await ProductsModel.updateOne(Query, reqBody);

    res
      .status(200)
      .json({ status: "success", data: "Data updated successfully" });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

//D=Delete

exports.DeleteStudent = async (req, res) => {
  try {
    let id = req.params.id;
    let Query = { _id: id };

    // Assuming ProductsModel.remove returns a promise, or you can use util.promisify
    let data = await ProductsModel.deleteOne(Query);

    res.status(200).json({ status: "success", data });
  } catch (err) {
    console.error(err);
    res.status(400).json({ status: "fail", data: err.message });
  }
};
