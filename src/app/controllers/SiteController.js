const Course = require('../models/Course');
const { multipleMongooseToObj } = require('../../util/mongoose');

class SiteController {
    index(req, res) {
        Course.find()
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObj(courses),
                });
            })
            .catch((err) => console.error(err));
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
