class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('new slug');
    }
}

module.exports = new NewsController();
