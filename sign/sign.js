import { generateKeyPairSync, createSign, createVerify } from "crypto";

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

let data = "This string will be signed";

const signer = createSign('rsa-sha256');

signer.update(data);

const sign = signer.sign(privateKey, 'hex');
console.log(`This is the sign: ${sign}`);

// if the line below is uncommented the file has no more validation
// data += 'adding changes in file';

const verifier = createVerify('rsa-sha256');
verifier.update(data);

const isverified = verifier.verify(publicKey, sign, 'hex');

console.log(isverified);
