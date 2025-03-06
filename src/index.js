const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

//Get form data
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

//Template engine
app.engine(
    'hbs',
    exphbs.engine({
        extname: 'hbs',
        defaultLayout: 'main',
        helpers: {
            indexPlusOne: function (index) {
                return index + 1;
            },
        },
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

//route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
