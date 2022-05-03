const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.goodByeWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("goodbye logs!", {structuredData: true});
  response.send("goodbye cruel firebase!");
});

exports.yoink = functions.https.onRequest((request, response) => {
  functions.logger.info("yoink");
  response.send("yoink");
});

exports.blubblub = functions.https.onRequest((request, response) => {
  functions.logger.info("blub");
  response.send("blub");
});
