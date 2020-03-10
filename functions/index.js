const functions = require('firebase-functions');
const express = require('express');
const db = require('./fb-index');

const app = express();

app.post('/users', (req, res) => {
  const { username, password, firstName, lastName, email } = req.body
  db.collection('users').doc(username).set({
    username,
    password,
    firstName,
    lastName,
    email
  })
    .then((response) => {
      console.log(response)
      res.status(201).send('Successfully created user.')
    })
    .catch((err) => {
      console.error(err);
      res.status(404).send('Could not create user.')
    })
})

app.get('/users', (req, res) => {
  const { username } = req.query;
  db.collection('users').doc(username).get()
    .then((doc) => {
        if (!doc.exists) {
        console.error('Could not find info for that user.');
        } else {
        res.status(200).send(doc.data());
        }
    })
    .catch((err) => {
        console.error(err);
        res.status(400).send('Could not get user information.')
    })
})

app.get('/users/all', async (req, res) => {
  var docs = [];
  await db.collection('users').get()
  .then((collection) => {
    collection.docs.forEach((doc) => {
      docs.push(doc.data());
    })
  })
  .then(() => {
    res.status(200).send(docs);
  })
  .catch((err) => {
    console.error(err);
    res.status(400).send('Could not get user information.')
  })
})

exports.api = functions.https.onRequest(app)