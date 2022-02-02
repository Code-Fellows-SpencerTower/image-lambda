'use strict';

let AWS = require('aws-sdk'); // lets you perform systematic actions on other services such as S3
let s3 = new AWS.S3();

exports.handler = async (event) => {

  console.log('Event S3 Object: ', event.Records[0].s3.object);


  let newImage = event.Records[0].s3.object.key;
  console.log('newImage: ', newImage);
  // 'download' images.json from the S3 bucket
  let manifest = await s3.getObject({ Bucket: 'sjt-image-bucket', Key: 'testfile.json' }).promise();

  console.log('MANIFEST ContentLength: ', manifest.ContentLength);

  // upload images.json file back to the S3 bucket
  // s3.putObject({Bucket: 'sjt-image-bucket', Key: 'images.json'}, Body: manifest})

  // await s3.putObject({Bucket: 'sjt-image-bucket', Key: 'images.json', Body: });

  // S3.putObject({Bucket: "sjt-image-bucket", Key: "images.json"})


  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
  };
  return response;
};