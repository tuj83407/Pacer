const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const axios = require('axios');

admin.initializeApp();

exports.getCarListings = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const response = await axios.get('https://auto.dev/api/v1/listings', {
        headers: {
          Authorization: 'Bearer ZrQEPSkKa25peG9uNTI4QGdtYWlsLmNvbQ==', // Replace with your actual API key
        },
      });
      res.status(200).send(response.data);
    } catch (error) {
      console.error('Error fetching from Auto.dev:', error);
      res.status(500).send('Failed to fetch car listings');
    }
  });
});
