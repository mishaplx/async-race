import Car from "./car.js";
import { dataNameCar, dataNameCar2 } from "./data.js";


export default class Garage {
  constructor(state) {
    this.state = state;
    this.renderState(this.state);
    this.buttonCreate = document.querySelector(".button__create");
    this.inputNameCarCreate = document.querySelector(".name__car-create");
    this.inputColorCarCreate = document.querySelector(".color__car-create");
    this.updateButton = document.querySelector(".button__update");
    this.generateButton = document.querySelector(".button-menu-generate");
    this.raceButton = document.querySelector(".button-menu-race");
    this.resetButton = document.querySelector(".button-menu-reset");
    this.winBlock = document.querySelector(".win");
    this.page = document.querySelector(".page");
    this.garage = document.querySelector(".garage");
    this.winnersButton = document.querySelector(".button__view-winner");
    this.winnersBlock = document.querySelector(".winners");
    this.garageButton = document.querySelector(".button__view-garage");
    this.inpUpdate = document.querySelector(".input__update");
    this.inpCreate = document.querySelector(".input__create");
    this.buttonMenu = document.querySelector(".button-menu");
    this.buttonCreate.addEventListener("click", () => {
      const colorCar = this.getColorCreate();
      const nameCar = this.getNameCreate();
      const car = new Car(nameCar, colorCar);
      car.createCar();
    });
    this.generateButton.addEventListener("click", () => {
      let i = 100;
      while (i !== 0) {
        const color = `rgb(${Math.floor(this.getRandomColor(0, 255))},${Math.floor(this.getRandomColor(0, 255))},${Math.floor(this.getRandomColor(0, 255))})`;
        const car = new Car(`${dataNameCar[this.getRandomName(0, dataNameCar.length)]}-${dataNameCar2[this.getRandomName(0, dataNameCar2.length)]}`, `#${this.getHexRGBColor(color)}`);
        car.createCar();
        i -= 1;
      }
    });
    this.raceButton.addEventListener("click", (event) => {
      if (!this.page.children.length) {
        // eslint-disable-next-line no-alert
        alert("Create car");
      } else {
        this.raceAll(event.target);
      }
    });
    this.resetButton.addEventListener("click", () => {
      this.resetAll();
      this.winBlock.style.display = "none";
    });
    this.winnersButton.addEventListener("click", () => {
      this.garage.style.display = "none";
      this.inpUpdate.style.display = "none";
      this.inpCreate.style.display = "none";
      this.buttonMenu.style.display = "none";
      this.winnersBlock.style.display = "block";
    });
    this.garageButton.addEventListener("click", () => {
      this.garage.style.display = "block";
      this.inpUpdate.style.display = "block";
      this.inpCreate.style.display = "block";
      this.buttonMenu.style.display = "block";
      this.winnersBlock.style.display = "none";
    });
  }

  // eslint-disable-next-line class-methods-use-this
  renderState(state) {
    state.forEach((el) => {
      // eslint-disable-next-line no-new
      new Car(el.name, el.color);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getHexRGBColor(color) {
    // eslint-disable-next-line no-param-reassign
    color = color.replace(/\s/g, "");
    const aRGB = color.match(
      /^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i,
    );
    if (aRGB) {
      // eslint-disable-next-line no-param-reassign
      color = "";
      for (let i = 1; i <= 3; i += 1) {
        // eslint-disable-next-line no-param-reassign
        color += Math.round(
          (aRGB[i][aRGB[i].length - 1] === "%" ? 2.55 : 1) * parseInt(aRGB[i], 10),
        )
          .toString(16)
          .replace(/^(.)$/, "0$1");
      }
    // eslint-disable-next-line no-param-reassign
    } else { color = color.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, "$1$1$2$2$3$3"); }
    return color;
  }

  // eslint-disable-next-line class-methods-use-this
  raceAll() {
    const buttonA = document.querySelectorAll(".car__block-buttonA");
    for (let i = 0; i < buttonA.length; i += 1) {
      if (buttonA[i].parentNode.parentNode.className === "car__block") {
        buttonA[i].click();
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  resetAll() {
    const buttonB = document.querySelectorAll(".car__block-buttonB");
    for (let i = 0; i < buttonB.length; i += 1) {
      buttonB[i].click();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getRandomColor(min, max) {
    return Math.random() * (max - min) + min;
  }

  // eslint-disable-next-line class-methods-use-this
  getRandomName(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getColorCreate() {
    return this.inputColorCarCreate.value;
  }

  // eslint-disable-next-line consistent-return
  getNameCreate() {
    if (this.inputNameCarCreate.value.length) {
      return this.inputNameCarCreate.value;
    }

    // eslint-disable-next-line no-alert
    alert("Entry name car!");
  }
}
