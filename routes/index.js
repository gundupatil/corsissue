var express = require('express');
var passport = require('passport');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }), (req, res, next) => {
  console.log('I reached here');
  res.json({user: req.user});}
);

router.get('/auth/google/redirect', passport.authenticate('google', {
  successRedirect: 'http://localhost:4200/dashboard',
  failureRedirect: '/'
}
));

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}
