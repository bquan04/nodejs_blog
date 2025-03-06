const Course = require('../models/Course');
const { multipleMongooseToObj } = require('../../util/mongoose');

class MeController {
    storedCourses(req, res) {
        Course.find({}).then((courses) =>
            res.render('me/stored-courses', {
                courses: multipleMongooseToObj(courses),
            }),
        );
    }
}

module.exports = new MeController();
