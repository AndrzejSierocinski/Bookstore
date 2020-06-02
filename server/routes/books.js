const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const User = require('../models/user');

const UserCtrl = require('../controllers/user');

router.get('/secret', UserCtrl.authMiddleware, function (req, res) {
  res.json({"secret": true});
});

router.get('/manage', UserCtrl.authMiddleware, function (req, res) {
  const user = res.locals.user;

  Book.where({user})
    .exec(function (err, fetchedBooks) {

      if (err) {
        return res.status(422).send({error});
      }

      return res.json(fetchedBooks);
    });
});

router.get('/:id/verify-user', UserCtrl.authMiddleware, function (req, res) {
  const user = res.locals.user;

  Book
    .findById(req.params.id)
    .populate('user')
    .exec(function (err, fetchedBook) {
      if (err) {
        return res.status(422).send({error});
      }

      if (fetchedBook.user.id !== user.id) {
        return res.status(422).send({errors: [{title: 'Invalid User!', detail: 'You are not book owner!'}]});
      }

      return res.json({status: 'verified'});
    });
});

router.get('/:id', function (req, res) {
  const bookId = req.params.id;

  Book.findById(bookId)
    .populate('user', 'username -_id')
    .exec(function (err, fetchedBook) {

      if (err || !fetchedBook) {
        return res.status(422).send({errors: [{title: 'Book Error!', detail: 'Could not find Book!'}]});
      }

      return res.json(fetchedBook);
    });
});

router.get('', function (req, res) {
  const author = req.query.author;
  const query = author ? {author: author.toLowerCase()} : {};

  Book.find(query)
    .exec(function (err, fetchedBooks) {

      if (err) {
        return res.status(422).send({error});
      }

      return res.json(fetchedBooks);
    });
});

router.patch('/:id', UserCtrl.authMiddleware, function (req, res) {

  const bookData = req.body;
  const user = res.locals.user;

  Book
    .findById(req.params.id)
    .populate('user')
    .exec(function (err, fetchedBook) {

      if (err) {
        return res.status(422).send({error});
      }

      if (fetchedBook.user.id !== user.id) {
        return res.status(422).send({errors: [{title: 'Invalid User!', detail: 'You are not book owner!'}]});
      }

      fetchedBook.set(bookData);
      fetchedBook.save(function (err) {
        if (err) {
          return res.status(422).send({error});
        }

        return res.status(200).send(fetchedBook);
      });
    });
});

router.delete('/:id', UserCtrl.authMiddleware, function (req, res) {
  const user = res.locals.user;

  Book
    .findById(req.params.id)
    .populate('user', '_id')
    .exec(function (err, fetchedBook) {

      if (err) {
        return res.status(422).send({error});
      }

      if (user.id !== fetchedBook.user.id) {
        return res.status(422).send({errors: [{title: 'Invalid User!', detail: 'You are not book owner!'}]});
      }

      fetchedBook.remove(function (err) {
        if (err) {
          return res.status(422).send({error});
        }

        return res.json({'status': 'deleted'});
      });
    });
});

router.post('', UserCtrl.authMiddleware, function (req, res) {
  const {title, author, publisher, category, image, ISBN, description, publication, price} = req.body;
  const user = res.locals.user;

  const book = new Book({title, author, publisher, category, image, ISBN, description, publication, price});
  book.user = user;

  Book.create(book, function (err, newBook) {
    if (err) {
      return res.status(422).send({error});
    }

    User.update({_id: user.id}, {$push: {books: newBook}}, function () {
    });

    return res.json(newBook);
  });
});


module.exports = router;


