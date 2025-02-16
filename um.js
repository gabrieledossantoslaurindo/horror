const text = "O mistério se revela lentamente...";
const suspenseText = document.getElementById("suspense-text");
let i = 0;

function revealText() {
  if (i < text.length) {
    suspenseText.textContent += text[i];
    i++;
    setTimeout(revealText, 100); // Ajuste o delay aqui (em milissegundos)
  }
}

revealText();