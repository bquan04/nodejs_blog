const { default: mongoose, mongo } = require('mongoose');

module.exports = {
    multipleMongooseToObj: function (mongooseArr) {
        return mongooseArr.map((mongooseArr) => mongooseArr.toObject());
    },
    mongooseToObj: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
