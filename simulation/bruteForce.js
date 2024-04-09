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

const user = new User("thales", "6895");

for (let idx =0; idx < 10000; idx++) {
    if (user.authentication("thales", `${idx}`)) {
        console.log(`senha hackeada com sucesso! A senha do indivíduo é ${idx}`);
        break;
    }
}

