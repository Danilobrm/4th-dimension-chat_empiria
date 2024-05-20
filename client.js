const readline = require('readline');
const WebSocket = require('ws');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const socket = new WebSocket('ws://localhost:8080');

socket.on('open', function() {
  console.log('Conectado ao servidor WebSocket');

  rl.question('Digite sua mensagem: ', function(message) {
    // Envia a mensagem para o servidor
    socket.send(message);
  });
});

socket.on('message', function(message) {
  // Recebe a mensagem do servidor e exibe no terminal
  console.log('Mensagem do servidor:', message);

  // Fecha a conexão após receber a mensagem
  socket.close();
});
