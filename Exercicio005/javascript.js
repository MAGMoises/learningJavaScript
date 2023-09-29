let nome = prompt('Qual seu nome?')
let a_nasc = prompt('Em que no você nasceu')
let a_atual = new Date().getFullYear()

document.write(`Olá, ${nome}! Você tem ${a_atual - a_nasc}`)
// console.log(`Olá, ${nome}! Seu nome tem ${nome.length} letras`)
