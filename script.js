
// COLOQUE SEU WHATSAPP AQUI
// Exemplo de formato: 5511999999999
const WHATSAPP_NUMBER = "55DDDNUMERO";

function comprar(servico, preco) {
  if (WHATSAPP_NUMBER === "55DDDNUMERO") {
    alert("O WhatsApp da loja ainda não foi configurado.");
    return;
  }

  const mensagem =
    `Olá! Quero comprar o serviço ${servico}, no valor de ${preco}.`;

  const link =
    "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=" + encodeURIComponent(mensagem);

  window.open(link, "_blank");
}
