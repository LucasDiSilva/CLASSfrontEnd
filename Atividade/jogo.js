const Cards = [
  "<img alt='javascript' src='img/1.jpg'>",
  "<img alt='javascript' src='img/2.jpg'>",
  "<img alt='javascript' src='img/3.jpg'>",
  "<img alt='javascript' src='img/4.jpg'>",
  "<img alt='javascript' src='img/5.jpg'>",
  "<img alt='javascript' src='img/6.jpg'>",
  "<img alt='javascript' src='img/1.jpg'>",
  "<img alt='javascript' src='img/2.jpg'>",
  "<img alt='javascript' src='img/3.jpg'>",
  "<img alt='javascript' src='img/4.jpg'>",
  "<img alt='javascript' src='img/5.jpg'>",
  "<img alt='javascript' src='img/6.jpg'>"
];

let Atual = [];

let clickCounter = 0;

function updateClickCounter() {
  document.getElementById("click-counter").textContent = clickCounter;
}

let random = Cards.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < Cards.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = random[i];
    box.onclick = Click;
    document.querySelector(".game").appendChild(box);
}

function Click() {
    if (Atual.length < 2) {
        this.classList.add("boxOpen");
        Atual.push(this);
        clickCounter++;
        updateClickCounter();
    }

    if (Atual.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (Atual[0].innerHTML === Atual[1].innerHTML) {
        Atual[0].classList.add("boxMatch");
        Atual[1].classList.add("boxMatch");
    } else {
        Atual[0].classList.remove("boxOpen");
        Atual[1].classList.remove("boxOpen");
    }

    Atual = [];
    if (document.querySelectorAll(".boxMatch").length === Cards.length) {
      document.getElementById("win-message").classList.add("show");
      console.log("Hellooww World!");
        Swal.fire({
            title: "Hello World"
        }).then(function () {
            window.location.reload();
        });
    }
}