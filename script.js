function registrarEntrada() {
  const email = document.getElementById("inputEmail").value;
  
  // Implemente aqui a lógica para registrar a entrada com o email capturado
  
  // Atualize #entradaStatus com o resultado
}

// Código para iniciar o scanner
const videoElement = document.getElementById('camera');

// Use a função `Instascan.Camera.getCameras` para obter uma lista de todas as câmeras disponíveis
Instascan.Camera.getCameras().then(function (cameras) {
  let cameraTraseira = null;

  // Percorra a lista de câmeras para encontrar a câmera traseira
  for (let i = 0; i < cameras.length; i++) {
      if (cameras[i].name.indexOf('back') !== -1) {
          cameraTraseira = cameras[i];
          break;
      }
  }

  if (cameraTraseira) {
      // Inicie o scanner usando a câmera traseira
      scanner.start(cameraTraseira);
  } else {
      alert('Nenhuma câmera traseira encontrada.');
  }
}).catch(function (e) {
  console.error(e);
  alert('Erro ao acessar as câmeras.');
});

// Adicione o listener para capturar o conteúdo do QR Code
scanner.addListener('scan', function (content) {
  // Aqui você captura o conteúdo do QR Code (por exemplo, um número de telefone)
  const qrCodeContent = content;

  // Atualize o campo de email com o conteúdo do QR Code
  document.getElementById("inputEmail").value = qrCodeContent;
});
