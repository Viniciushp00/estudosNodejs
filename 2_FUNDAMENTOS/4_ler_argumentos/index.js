//Lendo argumentos

//Array de argumentos do Node.js
//console.log(process.argv);


//Pegamos apenas os argumentos que criamos
const args = process.argv.slice(2);

//console.log(args);

//Separamos o nome da variavel do valor, e imprimimos apenas o valor
const nome = args[0].split("=")[1];
const idade = args[1].split("=")[1];

console.log(`O nome dele é ${nome} e ele tem ${idade} anos!`);



