const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual é sua linguagem preferida? ", (language) => {
    if (language === 'HTML') {
        console.log(`Isso nem e linguagem KKKKKKKKK`);
    } else {
        console.log(`A minha linguagem preferida é: ${language}`);
    }
    readline.close();
})