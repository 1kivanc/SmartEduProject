const Course = require("../models/Course");

exports.getAllCourses = async (req, res) => {
  const courses = await Course.find();
  try {
    res.status(200).render('courses',{
      courses,
      page_name:'courses',
    });
  } catch (error){
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.createCourse = async (req, res) => {
  try {
  
  const course = await Course.create(req.body);

    res.status(201).json({
      status: "succes",
      course,
    });
  } catch(error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
