/**var admin = require("firebase-admin");

var serviceAccount = require("squadalert-5db5d-firebase-adminsdk-peifu-3f25879892.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://squadalert-5db5d.firebaseio.com/"
});

var payload = {
  notification: {
    title: "Account Deposit",
  }
};

var options = {
  priority: "high",
  timeToLive: 60 * 60 *24
};

admin.messaging().sendToDevice(, payload, options)
  .then(function(response) {
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });
*/