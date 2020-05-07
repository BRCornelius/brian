import * as AWS from 'aws-sdk';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_KEY } from '../../../config';

const awsCredentials = {
    region: 'us-east-1',
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_KEY,
};
const ddb = new AWS.DynamoDB(awsCredentials);
const secretsConnection = new AWS.SecretsManager(awsCredentials);

export { ddb, secretsConnection };
