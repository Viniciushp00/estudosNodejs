//Externo
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

//Interno
const moduloSoma = require('./soma').soma

const a = parseInt(args['a']);
const b = parseInt(args['b']);

moduloSoma(a,b)