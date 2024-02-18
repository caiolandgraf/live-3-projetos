function updateClock() {
  let selectedTimezone = document.getElementById("timezone").value;
//   let selectedDate = new Date().toLocaleString("pt-BR", { timeZone: selectedTimezone });

  let formattedDate = new Intl.DateTimeFormat("pt-BR", {
    timeZone: selectedTimezone,
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date());

  // "" -> STRING COM CARACTERES ESPECIAIS COMO "é"
  // '' -> STRING PADRÃO
  // `` -> STRING CONCATENADA

  // Concatenar é colocar uma variável dentro de uma string :D / Juntar valores

  document.getElementById("clock").innerText = `Hora atual: ${formattedDate}`;
}

// Atualiza o relógio inicialmente
updateClock();

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Atualiza o relógio a cada minuto
// setInterval(updateClock, 60*1000)
