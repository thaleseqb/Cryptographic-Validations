import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function generateSaltedHash(passWord) {
    const salted = randomBytes(16).toString('hex');

    const hashedPassWord = scryptSync(passWord, salted, 64).toString('hex');

    return `${salted}:${hashedPassWord}`;
}

class User {
    constructor(name, password) {
        this.name = name;
        [this.salted, this.hash] = generateSaltedHash(password).split(':');
    }

    authentication(name, password) {
        if (name === this.name) {
            const hashTest = scryptSync(password, this.salted, 64);
            const realHash = Buffer.from(this.hash, 'hex');

            const cond_correspond = timingSafeEqual(hashTest, realHash);

            if (cond_correspond) {
                console.log("autenticação feita com sucesso");
                return true;
            }

            console.log("autenticação falhou tente novamente mais tarde");
            return false;
        }
        
    }
}

const costumer1 = new User("thales", "123");


costumer1.authentication('thales', '123');
costumer1.authentication('thales', '1233');

// console.log(costumer1);