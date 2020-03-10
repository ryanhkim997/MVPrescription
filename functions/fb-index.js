const admin = require('firebase-admin');
var serviceAccount = require("./mvprescription-firebase-adminsdk-i7z95-28b4a0396e");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mvprescription.firebaseio.com"
});

module.exports = admin.firestore();