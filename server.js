const routes = require('./controllers');
const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const exphbs = require('express-handlebars');
const session = require('express-session');
const app = express();
const hbs = exphbs.create({ helpers });

const PORT = process.env.PORT || 3001;
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now Listening'));
});
