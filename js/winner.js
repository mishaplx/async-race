export default class Winner {
  constructor(velocity, event) {
    this.numberBlock = document.querySelector(".number__id");
    this.carSvgBlock = document.querySelector(".car");
    this.nameCarBlock = document.querySelector(".name__car");
    this.winBlock = document.querySelector(".win");
    this.bestTimeBlock = document.querySelector(".best__time");
    this.table = document.querySelector(".table");
    this.winnerCount = document.querySelector(".winners-count");
    this.addInTableWinners(velocity, event);
  }
  async getWinner() {
    let url = "http://127.0.0.1:3000/winners";

    let response = await fetch(url);
    let result = await response.json();
  }
  async getWinnerLength(){

  }
  addInTableWinners(velocity, event) {
    if (velocity >= 100) {
      velocity = velocity / 10;
    } else {
      velocity = velocity;
    }
    
    const carSvgBlock = event.parentNode.children[2].cloneNode(true);
      carSvgBlock.classList.remove('startAnumation')
    const nameCar =
      event.parentNode.parentNode.children[0].children[2].innerHTML;

    const tr = document.createElement("tr");
    const tdnumber = document.createElement("td");
    tdnumber.innerHTML = Number(this.winnerCount.innerHTML)+ 1
    tr.appendChild(tdnumber);

    const carSvg = document.createElement("td");
    
    carSvg.appendChild(carSvgBlock);
    tr.appendChild(carSvg);

    const namecar = document.createElement("td");
    namecar.innerHTML = nameCar
    tr.appendChild(namecar);

    const tdWin = document.createElement("td");
    tdWin.innerHTML = 1
    tr.appendChild(tdWin);

    const tdVelocity = document.createElement("td");
    tdVelocity.innerHTML = velocity
    tr.appendChild(tdVelocity);
    this.table.appendChild(tr)
    this.winnersCount(true)
  }
  winnersCount(flag) {
    let count = Number(this.winnerCount.innerHTML);
    if (flag) {
      count++;
    } else {
      count--;
    }
    this.winnerCount.innerHTML = count;
  }
}
