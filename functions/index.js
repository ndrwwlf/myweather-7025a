/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const firebaseConfig = {
  apiKey: "AIzaSyDtWtNgWpNPfdAiamOvYikaWKR3HxBS6Go",
  authDomain: "myweather-7025a.firebaseapp.com",
  projectId: "myweather-7025a",
  storageBucket: "myweather-7025a.appspot.com",
  messagingSenderId: "532867384657",
  appId: "1:532867384657:web:380c0303f84fa0a73cbf70",
  measurementId: "G-KQWQQFVNGD"
};

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions")
const { randomUUID } = require('crypto');

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.flashBriefing = onRequest(
  {timeoutSeconds: 15, cors: true, maxInstances: 10},
  (request, response) => {
    logger.info("Flash Briefing Requested", {structuredData: true});
    response.set('Content-Type', 'application/json').json(
      [
        {
        "uid": randomUUID(),
        "updateDate": new Date().toISOString(),
        "titleText": "What kind of test will I do today?",
        "mainText": "The quick brown fox jumped.",
        "streamUrl": null,
        "redirectionUrl": "https://example.com"
        },
       ]
    );
});

exports.pubsub = functions
 .runWith({ timeoutSeconds: 60, memory: "1GB" })
 .pubsub
 .schedule('every 1 minutes')
 .onRun(context => {
 //TODO
    // console.log("Hello, world!");
});
