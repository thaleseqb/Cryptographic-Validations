import { createCipheriv, randomBytes, createDecipheriv, Decipher } from "crypto";

const message = 'course demonstration';
// this is the key shared to indicate that they area available to acces the information
const key = randomBytes(32);
const iv = randomBytes(16);

const cifer = createCipheriv('aes256', key, iv);
const ciferedMessage = cifer.update(message, "utf-8", 'hex') + cifer.final("hex");

console.log(ciferedMessage);

const decifer = createDecipheriv("aes256", key, iv);
const deciferedMessage = decifer.update(ciferedMessage, "hex", "utf-8") + decifer.final("utf-8");

console.log(`decifrada: ${deciferedMessage.toString("utf-8")}`)