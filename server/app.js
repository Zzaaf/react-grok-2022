const express = require('express');

const app = express();
const port = process.env.PORT ?? 4000;
const citiesRouter = require('./routes/cities.route');
const pageRouter = require('./routes/pages.route');
const config = require('./config/config');

// config
config(app);

// routing
app.use('/cities', citiesRouter);
app.use('/pages', pageRouter);

// listen
app.listen(port, () => console.log(`*** Server started at ${port} port ***`));
