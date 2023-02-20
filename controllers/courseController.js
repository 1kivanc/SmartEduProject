const Course = require("../models/Course");

exports.getAllCourses = async (req, res) => {
  const courses = await Course.find();
  try {
    res.status(201).json({
      status: "succes",
      courses,
    });
  } catch {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  try {
    res.status(201).json({
      status: "succes",
      course,
    });
  } catch {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

