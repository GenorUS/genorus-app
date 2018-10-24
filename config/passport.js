//Dependencies --------------------------------------------------------------
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const settings = require('./settings');
const db = require("../models");


module.exports = function (passport) {
  let opts = {};

  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = settings.secret;

    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        db.User.findOne({
            where: {
                id: jwt_payload.id
            }
        })
            .then(user => {
                if(user){
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
    }));
}
