export default class Car {
  constructor(nameCar, colorCar) {
    this.countAddEvent = 0;
    this.nameCar = nameCar;
    this.colorCar = colorCar;
    this.page = document.querySelector(".page");
    this.createBlockCar(this.nameCar, this.colorCar);
    this.arrRes = [];
    this.winner = document.querySelector(".button__view-winner");
    this.paginationBlock = document.querySelector(".pagination");

    this.winner.addEventListener("click", () => {});
    if (this.page.children.length > 7) {
      this.pagination();
    }
  }

  createBlockCar(nameCar, colorCar) {
    const carBlock = document.createElement("div");
    carBlock.className = "car__block";

    const carButonBlock = document.createElement("div");
    carButonBlock.className = "car__block-button";

    const carButtonA = document.createElement("button");
    carButtonA.className = "car__block-buttonA";
    carButtonA.innerHTML = "A";

    const carButtonB = document.createElement("button");
    carButtonB.className = "car__block-buttonB";
    carButtonB.innerHTML = "B";

    const carImgBlock = document.createElement("div");
    carImgBlock.className = "car__block-img";

    const buttonSelect = document.createElement("button");
    buttonSelect.innerHTML = "select";
    buttonSelect.className = "button__select button-blue";

    const buttonRemove = document.createElement("button");
    buttonRemove.innerHTML = "remove";
    buttonRemove.className = "button__remove button-blue";

    const carNameBlock = document.createElement("span");
    carNameBlock.className = "name__car";
    carNameBlock.innerHTML = nameCar;
    const svgCar = document.createElement("div");
    svgCar.className = "svg__car";
    svgCar.innerHTML = this.appendSVG(colorCar);

    const flagSvg = document.createElement("div");
    flagSvg.className = "flag__block";
    flagSvg.innerHTML = this.appendSvgFlag();

    carButonBlock.appendChild(buttonSelect);
    carButonBlock.appendChild(buttonRemove);
    carButonBlock.appendChild(carNameBlock);

    carBlock.appendChild(carButonBlock);
    carBlock.appendChild(carImgBlock);

    carImgBlock.appendChild(carButtonA);
    carImgBlock.appendChild(carButtonB);
    carImgBlock.appendChild(svgCar);
    carImgBlock.appendChild(flagSvg);

    this.page.appendChild(carBlock);
    let flag = 0;
    buttonSelect.addEventListener("click", event => {
      const page = document.querySelector(".page");
      let parentNode = event.target.parentNode.parentNode;
      parentNode.classList.toggle("active");

      for (let i = 0; i < page.children.length; i++) {
        if (page.children[i].className == "car__block active") {
          flag++;
        }
      }

      let buttonUpdate = document.querySelector(".button__update");
      if (flag == 2) {
        parentNode.classList.remove("active");
        flag = 0;
      } else {
        this.disabledUpdate();
      }

      buttonUpdate.addEventListener("click", event => {
        this.updateButton();
      });
    });
    buttonRemove.addEventListener("click", event => {
      debugger;
      this.removeBlockCar(event.target);
      this.garageCount(false);
      this.checkPagination();
    });

    carButtonA.addEventListener("click", event => {
      const parentNode = event.target.parentNode;
      let left = 0;
      const speed = this.getRandom(1, 100);
      const S = carImgBlock.offsetWidth;
      const time = (S / 100 / speed).toFixed(2);

      console.log("speed: m/s " + speed);
      console.log("Путь:", carImgBlock.offsetWidth);
      console.log("time", (S / 100 / speed).toFixed(2));
      console.log("\n");
      this.arrRes.push(time);
      console.log(this.arrRes);

      let x = setInterval(() => {
        left = left + speed;
        parentNode.children[2].style.left = `${left}px`;

        if (
          parseInt(parentNode.children[2].style.left, 10) >=
          carImgBlock.offsetWidth - speed - 100
        ) {
          clearInterval(x);
        }
      }, 100);

      carButtonB.addEventListener("click", event => {
        let parentNode = event.target.parentNode;
        clearInterval(x);
        parentNode.children[2].style.left = `0%`;
      });
    });

    this.garageCount(true);
    this.createCar();
  }
  checkPagination() {
    debugger
    this.paginationBlock.innerHTML = "";
    let arrPage = [];
    let pageLength = this.page.children.length;

    let i = 1;
    while (pageLength > 7) {
      arrPage.push(i);
      i++;
      pageLength = pageLength - 7;
      if (pageLength < 7) {
        arrPage.push(i);
      }
    }

    arrPage.forEach(el => {
      let pageNumber = document.createElement("div");
      pageNumber.className = "page__number";
      pageNumber.innerHTML = el;
      this.paginationBlock.appendChild(pageNumber);
    });
    // for (let i = 0; i < this.page.children.length; i++) {
    //   if (i >= 7) {
    //     //console.log('none');
    //     this.page.children[i].classList.add("hide");
    //   }
    // }
  }

  pagination() {
    this.paginationBlock.innerHTML = "";
    let arrPage = [];
    let pageLength = this.page.children.length;
    //debugger
    let i = 1;
    while (pageLength > 7) {
      arrPage.push(i);
      i++;
      pageLength = pageLength - 7;
      if (pageLength < 7) {
        arrPage.push(i);
      }
    }

    arrPage.forEach(el => {
      let pageNumber = document.createElement("div");
      pageNumber.className = "page__number";
      pageNumber.innerHTML = el;
      this.paginationBlock.appendChild(pageNumber);
    });
    for (let i = 0; i < this.page.children.length; i++) {
      if (i >= 7) {
        console.log("none");
        this.page.children[i].classList.add("hide");
      }
    }
    this.paginationBlock.addEventListener("click", event => {
      // const buttonB = document.querySelectorAll('.car__block-buttonB')
      // for (let i = 0; i < buttonB.length; i++) {
      //   buttonB[i].click();
      // }
      if (event.target.className == "page__number") {
        const pageCount = document.querySelector(".page-count");
        const numberPage = Number(event.target.innerHTML);
        pageCount.innerHTML = numberPage;
        if (numberPage === 1) {
          for (let i = 0; i < this.page.children.length; i++) {
            if (i >= 7) {
              this.page.children[i].classList.add("hide");
            } else {
              this.page.children[i].classList.remove("hide");
            }
          }
        } else {
          //debugger
          for (let i = 0; i < this.page.children.length; i++) {
            if (i >= 7 * (numberPage - 1) && i <= 7 * numberPage - 1) {
              this.page.children[i].classList.remove("hide");
            } else {
              this.page.children[i].classList.add("hide");
            }
          }
        }
      }
    });
  }
  appendSVG(color) {
    let svgStr = `<svg version="1.1" id="Capa_1" width="40px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 404.243 404.243" style="enable-background:new 0 0 404.243 404.243;" xml:space="preserve">
 <g>
   <path style="fill:${color};" d="M394.444,252.603l-4.552-0.091v-15.73c3.752-1.441,6.421-5.069,6.421-9.329
     c0-4.331-2.759-8.008-6.611-9.398c-2.127-28.499-23.319-51.872-51.973-56.469l-49.959-8.014l-10.998-14.737
     c-17.819-23.876-45.104-38.413-74.86-39.882c-0.164-0.008-0.329-0.012-0.493-0.012h-50.743
     c-69.173,0-127.165,48.748-141.453,113.692C4.065,213.029,0,217.332,0,222.592v4.75c0,2.7,1.075,5.146,2.815,6.945
     c-0.848,4.514-1.311,9.161-1.311,13.917v6.798c0,5.523,4.478,10,10,10h4.233l29.387,0.59c0.925,22.052,19.146,39.71,41.421,39.71
     c21.713,0,39.57-16.778,41.314-38.049l131.655,2.643c0.096,0.003,0.194,0.01,0.289,0.01c0.018,0,0.036-0.003,0.054-0.003
     l16.625,0.334c3.087,19.836,20.283,35.065,40.971,35.065c20.113,0,36.922-14.397,40.677-33.426l35.911,0.721
     c0.068,0.001,0.137,0.002,0.205,0.002c5.43,0,9.885-4.346,9.994-9.799C404.352,257.28,399.966,252.713,394.444,252.603z
      M338.92,263.837c0,11.836-9.63,21.466-21.466,21.466c-11.837,0-21.467-9.63-21.467-21.466c0-11.836,9.63-21.466,21.467-21.466
     C329.29,242.371,338.92,252.001,338.92,263.837z M65.188,265.996l9.37,0.188c1.095,5.623,6.043,9.87,11.987,9.87
     c5.773,0,10.598-4.009,11.875-9.391l9.354,0.188c-1.473,10.411-10.419,18.452-21.23,18.452
     C75.438,285.303,66.275,276.822,65.188,265.996z M150.676,118.94h50.488c23.684,1.24,45.389,12.841,59.579,31.856l13.424,17.987
     c1.556,2.084,3.862,3.481,6.431,3.893l53.964,8.656c19.334,3.102,33.654,18.824,35.188,38.026
     c-12.579-14.72-31.253-23.841-51.881-23.841c-32.594,0-60.256,23.144-66.75,54.207l-94.805-1.903v-15.236
     c0-32.9-26.766-59.667-59.666-59.667H76.79c-12.242,0-23.799,2.956-34.027,8.162C64.418,143.949,104.679,118.94,150.676,118.94z
      M21.596,245.003c1.665-29,25.785-52.085,55.194-52.085h19.856c21.872,0,39.666,17.794,39.666,39.667v12.418H21.596z
      M317.454,222.371c-18.114,0-33.542,11.68-39.176,27.9l-6.652-0.134c5.896-20.068,24.514-34.619,46.242-34.619
     c22.357,0,41.47,15.142,46.758,36.486l-7.479-0.15C351.994,234.814,336.153,222.371,317.454,222.371z"/>
   <circle style="fill:${color};" cx="317.454" cy="263.837" r="12.217"/>
   <path style="fill:${color};" d="M171.34,185.578h81.05c3.783,0,7.243-2.135,8.939-5.518c1.695-3.382,1.338-7.432-0.926-10.464
     l-8.761-11.738l0.001,0.001c-12.25-16.415-31.008-26.409-51.466-27.419c-0.164-0.008-0.329-0.012-0.493-0.012H171.34
     c-5.522,0-10,4.477-10,10v35.15C161.34,181.101,165.817,185.578,171.34,185.578z M181.34,150.428h18.087
     c12.53,0.679,24.146,6.123,32.632,15.15H181.34V150.428z"/>
 </svg>`;
    return svgStr;
  }
  appendSvgFlag() {
    let str = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="37.979px" height="37.979px" viewBox="0 0 37.979 37.979" style="enable-background:new 0 0 37.979 37.979;"
    xml:space="preserve">
 <g>
   <path style="fill:white;" d="M21.553,2.322C15.45,3.435,9.956,6.693,2.608,3.406c0.096,0.333,0.189,0.667,0.283,1h-1.75L1,3.906H0l8.988,31.75h1
     l-4.01-14.167h1.75c0.109,0.39,0.221,0.778,0.33,1.168C15.405,25.942,20.9,22.684,27,21.571
     C25.186,15.155,23.369,8.738,21.553,2.322z M9.796,5.831c2.07-0.046,4.032-0.473,5.971-0.983c0.521,1.833,1.039,3.667,1.559,5.5
     c-1.938,0.51-3.901,0.937-5.973,0.983C10.834,9.497,10.314,7.664,9.796,5.831z M5.766,20.739L1.354,5.156h1.75
     c1.472,5.194,2.941,10.389,4.412,15.583H5.766z M7.173,15.991c-0.508-1.792-1.017-3.583-1.522-5.375
     c2.046,0.751,3.951,1.005,5.773,0.964c0.507,1.792,1.015,3.583,1.521,5.375C11.125,16.996,9.219,16.742,7.173,15.991z
      M20.651,22.098c-1.938,0.511-3.9,0.937-5.972,0.982c-0.519-1.834-1.038-3.667-1.558-5.5c2.069-0.046,4.032-0.473,5.973-0.983
     C19.613,18.432,20.133,20.264,20.651,22.098z M24.039,14.635c-1.729,0.375-3.414,0.889-5.121,1.337
     c-0.508-1.792-1.016-3.583-1.521-5.375c1.706-0.449,3.395-0.962,5.12-1.337C23.023,11.052,23.531,12.843,24.039,14.635z
      M23.227,5.446c0.096,0.333,0.189,0.667,0.283,1c0.787-0.118,1.584-0.195,2.398-0.213c0.52,1.833,1.037,3.667,1.557,5.5
     c-0.813,0.018-1.611,0.095-2.396,0.213c0.591,2.083,1.181,4.167,1.771,6.25c0.785-0.118,1.584-0.195,2.396-0.213
     c0.521,1.833,1.039,3.667,1.56,5.5c-2.07,0.045-4.033,0.473-5.974,0.981c-0.121-0.432-0.243-0.86-0.364-1.291
     c-2.018,0.529-4.008,1.15-6.068,1.525c0.217,0.766,0.434,1.529,0.649,2.293c6.101-1.113,11.597-4.371,18.94-1.086
     c-1.814-6.416-3.633-12.833-5.449-19.25C29.11,5.128,26.094,5.015,23.227,5.446z M34.833,18.322
     c-2.046-0.751-3.95-1.005-5.772-0.964c-0.508-1.792-1.016-3.583-1.521-5.375c1.82-0.041,3.727,0.213,5.771,0.964
     C33.817,14.739,34.326,16.53,34.833,18.322z"/>
 </g>
 </svg>`;
    return str;
  }
  garageCount(flag) {
    let garageCount = document.querySelector(".garage-count");
    let count = Number(garageCount.innerHTML);
    if (flag) {
      count++;
    } else {
      count--;
    }
    garageCount.innerHTML = count;
  }
  removeBlockCar(block) {
    debugger;
    const nextNode = block.parentNode.parentNode.nextSibling;
    this.checkNextSibling(nextNode);

    block.parentNode.parentNode.remove();
    const nameCar = block.parentNode.children[2].innerHTML;
    const colorCar =
      block.parentNode.parentNode.children[1].children[2].children[0]
        .children[0].children[0].style.fill;
    this.removeCar(nameCar, colorCar);
  }
  checkNextSibling(nextNode) {
    debugger;
    if (nextNode == null) {
      return;
    }
    if (nextNode.className == "car__block hide") {
      nextNode.className = "car__block";
    } else {
      this.checkNextSibling(nextNode.nextSibling);
    }
    //console.log(nextNode);
  }

  
  updateButton() {
    const page = document.querySelector(".page");
    let nameCarUpdate = document.querySelector(".name__car-update");
    let colorCarUpdate = document.querySelector(".color__car-update");
    for (let i = 0; i < page.children.length; i++) {
      if (page.children[i].className == "car__block active") {
        if (nameCarUpdate.value == "") {
          alert("Entry name car!");
          return;
        }
        let nameCar = page.children[i].children[0].children[2].innerHTML;
        let colorCar =
          page.children[i].children[1].children[2].children[0].children[0]
            .children[0].style.fill;
        this.updateCar(nameCar, colorCar);
        page.children[i].children[0].children[2].innerHTML =
          nameCarUpdate.value;
        page.children[
          i
        ].children[1].children[2].children[0].children[0].children[0].style.fill =
          colorCarUpdate.value;
        page.children[
          i
        ].children[1].children[2].children[0].children[0].children[1].style.fill =
          colorCarUpdate.value;
        page.children[
          i
        ].children[1].children[2].children[0].children[0].children[2].style.fill =
          colorCarUpdate.value;
      }
    }
  }
  async createCar() {
    let url = "http://127.0.0.1:3000/garage";

    let dataParams = {
      name: this.nameCar,
      color: this.colorCar,
    };
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataParams),
    });
    let result = await response.json();
  }
  async removeCar(nameCar, colorCar) {
    let color = `#${this.getHexRGBColor(colorCar)}`;
    let url = "http://127.0.0.1:3000/garage";
    let response = await fetch(url);
    const data = await response.json();
    data.forEach(el => {
      if (el.name === nameCar && el.color === color) {
        let url = `http://127.0.0.1:3000/garage/${el.id}`;
        fetch(url, { method: "DELETE" });
      }
    });
  }
  async updateCar(nameCar, colorCar) {
    let nameCarUpdate = document.querySelector(".name__car-update");
    let colorCarUpdate = document.querySelector(".color__car-update");
    let color = `#${this.getHexRGBColor(colorCar)}`;
    let obj = {
      name: nameCarUpdate.value,
      color: colorCarUpdate.value,
    };
    let url = "http://127.0.0.1:3000/garage";
    let response = await fetch(url);
    const data = await response.json();
    data.forEach(el => {
      if (el.name === nameCar && el.color === color) {
        let url = `http://127.0.0.1:3000/garage/${el.id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
      }
    });
  }
  disabledUpdate() {
    let nameCarUpdate = document.querySelector(".name__car-update");
    let colorCarUpdate = document.querySelector(".color__car-update");
    let buttonUpdate = document.querySelector(".button__update");
    nameCarUpdate.disabled = !nameCarUpdate.disabled;
    colorCarUpdate.disabled = !colorCarUpdate.disabled;
    buttonUpdate.disabled = !buttonUpdate.disabled;
  }
  getHexRGBColor(color) {
    color = color.replace(/\s/g, "");
    let aRGB = color.match(
      /^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i
    );
    if (aRGB) {
      color = "";
      for (var i = 1; i <= 3; i++)
        color += Math.round(
          (aRGB[i][aRGB[i].length - 1] == "%" ? 2.55 : 1) * parseInt(aRGB[i])
        )
          .toString(16)
          .replace(/^(.)$/, "0$1");
    } else
      color = color.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, "$1$1$2$2$3$3");
    return color;
  }
  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
