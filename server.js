const app = require('./src/config/custom-express');

app.listen(3000, function() {
console.log(`Servidor rodando na porta 3000`)
});
// criamos o servidor express
// recebe como primeiro parâmetro o número da porta
// function é executada sempre que o servidor for iniciado