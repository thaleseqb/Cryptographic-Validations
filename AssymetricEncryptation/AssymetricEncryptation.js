import { generateKeyPairSync, publicEncrypt, privateDecrypt } from "crypto";

const object_ = {
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    }};

const {privateKey, publicKey} = generateKeyPairSync('rsa', object_);

const cryptographiedData = publicEncrypt(
    publicKey, Buffer.from("Secret message")
)

console.log(cryptographiedData.toString('hex'));

const decipheredData = privateDecrypt(privateKey, cryptographiedData);

console.log(`Deciphered data: ${decipheredData.toString('utf-8')}`)