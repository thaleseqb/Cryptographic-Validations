import jwt from "jsonwebtoken";

const secretKey = "superSecretKey";

const token = jwt.sign(
    {
        nickName: "mantissa",
        course: "security and node.js"

    }, secretKey)

console.log(token);

const decipherToken = jwt.verify(token, secretKey);

console.log(decipherToken);