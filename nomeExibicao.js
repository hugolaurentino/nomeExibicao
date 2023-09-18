const primeiroNome = "Mario";
const sobrenome = "sousa";
const apelido = "Antonia";

console.log(`
${apelido ? apelido :
        primeiroNome && sobrenome ? `${primeiroNome} ${sobrenome}` :
            primeiroNome
    }
`);