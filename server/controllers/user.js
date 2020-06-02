const User = require('../models/user');
const helper = require('jsonwebtoken');
const config = require('../config');

exports.getUser = function (req, res, next) {
  const requestedUserId = req.params.id;
  const user = res.locals.user;

  if (requestedUserId === user.id) {
    User.findById(requestedUserId, function (err, fetchedUser) {
      if (err) {
        return res.status(422).send({error});
      }

      return res.json(fetchedUser);
    })

  } else {
    User.findById(requestedUserId)
      .exec(function (err, fetchedUser) {
        if (err) {
          return res.status(422).send({error});
        }

        return res.json(fetchedUser);
      })
  }
}

exports.auth = function (req, res, next) {
  const {email, password} = req.body;

  if (!password || !email) {
    return res.status(422).send({errors: [{title: 'Data missing!', detail: 'Provide email and password!'}]});
  }

  User.findOne({email}, function (err, user) {
    if (err) {
      return res.status(422).send({error});
    }

    if (!user) {
      return res.status(422).send({errors: [{title: 'Invalid User!', detail: 'User does not exist'}]});
    }

    if (user.hasSamePassword(password)) {
      const token = helper.sign({
        userId: user.id,
        username: user.username
      }, config.SECRET, {expiresIn: '1h'});

      return res.json(token);
    } else {
      return res.status(422).send({errors: [{title: 'Wrong Data!', detail: 'Wrong email or password'}]});
    }
  });
}

exports.register = function (req, res, next) {
  const {username, email, password, confirmPass} = req.body;

  if (!password || !email) {
    return res.status(422).send({errors: [{title: 'Data missing!', detail: 'Provide email and password!'}]});
  }

  if (password !== confirmPass) {
    return res.status(422).send({errors: [{title: 'Invalid passsword!', detail: 'Password is not a same as confirmation!'}]});
  }

  User.findOne({email}, function (err, existingUser) {
    if (err) {
      return res.status(422).send({error});
    }

    if (existingUser) {
      return res.status(422).send({errors: [{title: 'Invalid email!', detail: 'User with this email already exist!'}]});
    }

    const user = new User({
      username,
      email,
      password
    });

    user.save(function (err) {
      if (err) {
        return res.status(422).send({error});
      }

      return res.json({'registered': true});
    })
  })
}

exports.authMiddleware = function (req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    const user = parseToken(token);

    User.findById(user.userId, function (err, user) {
      if (err) {
        return res.status(422).send({error});
      }

      if (user) {
        res.locals.user = user;
        next();
      } else {
        return notAuthorized(res);
      }
    })
  } else {
    return notAuthorized(res);
  }
}

function parseToken(token) {
  return helper.verify(token.split(' ')[1], config.SECRET);
}

function notAuthorized(res) {
  return res.status(401).send({errors: [{title: 'Not authorized!', detail: 'You need to login to get access!'}]});
}

