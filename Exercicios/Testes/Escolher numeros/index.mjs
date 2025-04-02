import inquirer from 'inquirer'

choserNumber()

function choserNumber(){
    inquirer.prompt(
        [
            {
                type: 'list',
                name: 'typeGame',
                message: 'Selecione uma opção de jogo',
                choices: [
                    'Lotofacil',
                    'Lotomania',
                    'Quina'
                ]
            }
        ]
    ).then((resposta) => {
    
        let infoJogo;
    
        if(resposta.typeGame == 'Lotofacil'){
            infoJogo = {
                numeros : 25,
                qtdNumeros: 15
            }
        }
        else if (resposta.typeGame == 'Lotomania'){
            infoJogo = {
                numeros : 100,              
                qtdNumeros: 50
            }
        }
    
        const arrayNums = buildArray(infoJogo.numeros)
    
        const numeros = bubbleSort(getRandomUniqueNumbers(arrayNums, infoJogo.qtdNumeros));
    
        console.log("Os seus números da sorte são: ");
        numeros.forEach(element => {
            process.stdout.write(`${element} `)
        });
        console.log("\n")
        choserNumber()
    }).catch((err) => { console.error(`Ocorreu um erro ${err}`) })
}


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

function buildArray(qtdNumeros){
    let array = [];
    for(let i =0; i<qtdNumeros;i++){
        array.push(i+1)
    }

    return array
}