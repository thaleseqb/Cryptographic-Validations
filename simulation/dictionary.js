import { createHash } from 'crypto'

class User{
    constructor(name, password){
        this.name = name;
        this.hash = this.createMyHash(password);
    }
    
    createMyHash(password) {
        return createHash('sha256').update(password).digest('hex');
    }

    //código omitido

    authentication(name, password){
        if (name === this.name && this.hash === this.createMyHash(password)){
            console.log("Usuário autenticado com sucesso!");
            return true;
        }
        console.log("Falha de autenticação.");
        return false;
    }
}

// código omitido

const commomPasswords = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"]
const user = new User("thales", commomPasswords[4]);

for (let password of commomPasswords) {
    if (user.authentication("thales", password)) {
        console.log(`A senha do sujeito é ${password}`);
        break;
    }
}

