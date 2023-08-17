// Variáveis
const screen1 = document.querySelector(".closed");
const screen2 = document.querySelector(".opened");
const biscuit = document.querySelector("#biscuit");
const newBiscuit = document.querySelector("#btnNewBiscuit");

let randomNumber;
let message;

const messages = ["O sucesso andará sempre do seu lado. Toda a sorte do mundo!", "Boa sorte! Estou torcendo para que tudo dê certo neste dia tão especial.",
"Em todos os momentos, para todas as situações, o meu desejo é que a boa sorte acompanhe sempre você!", "A sua sorte mora dentro de você, bem no centro da sua força de vontade. Confie em si mesmo!"]

// Eventos
biscuit.addEventListener('click', handleClickOpen);
btnNewBiscuit.addEventListener('click', handleClickReset);

// Funções
function handleClickOpen() {
  toggleScreen();
  randomNumber = Math.round(Math.random() * 3);
  document.querySelector(".message span").innerText = messages[randomNumber];
}

function handleClickReset(event){
  event.preventDefault();
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}