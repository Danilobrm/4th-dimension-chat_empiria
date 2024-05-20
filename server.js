const readline = require('readline');
const WebSocket = require('ws');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const socket = new WebSocket('ws://localhost:8080');

socket.on('open', function() {
  console.log('Conectado ao servidor WebSocket');

  // Função para enviar mensagem e continuar solicitando novas mensagens
  function sendMessage() {
    rl.question('Digite sua mensagem (ou digite "exit" para encerrar): ', function(message) {
      if (message.toLowerCase() === 'exit') {
        // Se o usuário digitar 'exit', fecha a conexão e termina o programa
        socket.close();
        rl.close();
      } else {
        // Envia a mensagem para o servidor
        socket.send(message);
        // Chama novamente a função para continuar solicitando novas mensagens
        sendMessage();
      }
    });
  }

  // Inicia o ciclo de envio de mensagens
  sendMessage();
});

socket.on('message', function(message) {
  // Recebe a mensagem do servidor e exibe no terminal
  console.log('Mensagem do servidor:', message);
});
