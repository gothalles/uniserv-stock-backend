const crypt = require('crypto');
const base64Url = require('base64-url');
const key = 'abcd123456';

const header = {
  alg: 'HS256',
  typ: 'JWT',
};

const payload = {
  username: 'user1@user.com',
  name: 'Luiz Carlos',
  exp: new Date().getTime(),
};

const headerEncoded = base64Url.encode(JSON.stringify(header));
const payloadEncoded = base64Url.encode(JSON.stringify(payload));

const signature = crypt
  .createHmac('sha256', key)
  .update(`${headerEncoded}.${payloadEncoded}`)
  .digest('bin');

console.log('Header:  ' + headerEncoded);
console.log('Payload: ' + payloadEncoded);
console.log(
  'Token:   ' +
    `${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`,
);
