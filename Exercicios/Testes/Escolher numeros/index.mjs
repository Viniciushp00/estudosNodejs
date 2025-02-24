import inquirer from 'inquirer'

const lotofacilNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

inquirer.prompt(
    [
        {
            type: 'list',
            name: 'typeGame',
            message: 'Selecione uma opção de jogo',
            choices: [
                'Lotofacil',
                'Mega-Sena',
                'Quina'
            ]
        }
    ]
).then((resposta) => {

    let infoJogo;

    if(resposta.typeGame == 'Lotofacil'){
        infoJogo = {
            numeros : lotofacilNum,
            qtdNumeros: 15
        }
    }

    const numeros = bubbleSort(getRandomUniqueNumbers(infoJogo.numeros, infoJogo.qtdNumeros));

    console.log("Os seus números da sorte são: ");
    numeros.forEach(element => {
        process.stdout.write(`${element} `)
    });
}).catch((err) => { console.error(`Ocorreu um erro ${err}`) })


//Algoritmo Fisher-Yates Shuffle
function getRandomUniqueNumbers(array, count) {
    if (count > array.length) {
        throw new Error("A quantidade solicitada é maior que o tamanho do array.");
    }

    // Faz uma cópia do array para não modificar o original
    let shuffled = [...array];

    // Embaralha o array usando Fisher-Yates Shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Retorna os primeiros 'count' elementos do array embaralhado
    return shuffled.slice(0, count);
}

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }

    return array;
}