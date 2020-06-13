const express = require('express');
const routes = require('./controllers');
// import sequelize connection
const sequelize = require('./config/connection.js');
//======= path for public folder ===========
const path = require('path');
//======== handlebars ==============
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//==== public folder static files ============
app.use(express.static(path.join(__dirname, 'public')));
//=== handlebars ========================
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
sequelize.sync({ force: false }).then(() => { //once you have the association in index.js file , change the force = true and start the server to drop and create the tables. Once thats done, change it back to false
  app.listen(PORT, () => console.log('Now listening'));
});