const express = require ('express');
const cookieSession = require ('cookie-session');
const passport = require ('passport');
const mongoose = require ('mongoose');
const keys = require ('./config/keys');
require ('./models/User');
require ('./services/passport');

mongoose.connect (keys.mongoURI);
const app = express ();

app.use (
  cookieSession ({
    maxAge: 30 * 24 * 60 * 60 * 100,
    keys: [keys.cookieKey],
  })
);
app.use (passport.initialize ());
app.use (passport.session ());
require ('./routes/authRoutes') (app);

const PORT = process.env.PORT || 5000;
app.listen (PORT);

//http://localhost:5000/auth/google/callback
//git repo
//https://git.heroku.com/rocky-beyond-10909.git

//https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=633284633372-f9s1gplpoht7la7sg3ld25mb6ea294uk.apps.googleusercontent.com

//A7gSOi9HTrqwrzgA
//mongodb+srv://omar:<password>@quarantinebuddy-as1lc.mongodb.net/test?retryWrites=true&w=majority
