const Course = require('../models/Course');
const { mongooseToObj } = require('../../util/mongoose');
const { render } = require('sass');

class CourseController {
    show(req, res) {
        Course.findOne({ slug: req.params.slug }).then((course) => {
            res.render('courses/show', { course: mongooseToObj(course) });
        });
    }

    create(req, res) {
        res.render('courses/create');
    }

    store(req, res) {
        const formData = req.body;
        res.json(formData);
        const course = new Course(formData);
        course.save();

        res.send('Khoa hoc da duoc luu!!');
    }

    //[GET]
    edit(req, res) {
        Course.findById(req.params.id).then((course) =>
            res.render('courses/edit', {
                course: mongooseToObj(course),
            }),
        );
    }

    //[PUT] /courses/:id
    update(req, res) {
        Course.updateOne({ _id: req.params.id }, req.body).then(() =>
            res.redirect('/me/stored/courses'),
        );
    }
}

module.exports = new CourseController();
