const opB = require('./OperacoesBasicas')
const opP = require('./OperacoesPotenciais')
const opA = require('./OperacoesArea')

module.exports = {...opA, ...opB, ...opP}