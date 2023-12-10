const express = require('express');
const AWS = require('aws-sdk');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configure AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

app.get('/api/download.svelte', async (req, res) => {
  try {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: 'your-certificate-key.pem'  // Replace with your file key
    };
    const data = await s3.getObject(params).promise();
    res.send(data.Body);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error downloading certificate');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
