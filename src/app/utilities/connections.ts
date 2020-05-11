import * as AWS from 'aws-sdk';

const awsCredentials = {
    region: 'us-east-1'
};
const ddb = new AWS.DynamoDB(awsCredentials);
const secretsConnection = new AWS.SecretsManager(awsCredentials);

export { ddb, secretsConnection };
