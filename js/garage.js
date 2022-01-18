import Car from './car.js';
import { dataNameCar} from './data.js';

export default class Garage{
  constructor(state){
    this.state = state; 
    this.renderState(this.state)
    this.buttonCreate = document.querySelector('.button__create')
    this.inputNameCarCreate = document.querySelector('.name__car-create')
    this.inputColorCarCreate = document.querySelector('.color__car-create')
    this.updateButton = document.querySelector('.button__update')
    this.generateButton = document.querySelector('.button-menu-generate')
    this.raceButton = document.querySelector('.button-menu-race')
    this.resetButton = document.querySelector('.button-menu-reset')
    this.page = document.querySelector('.page')
    this.garage = document.querySelector('.garage')
    this.winnersButton = document.querySelector('.button__view-winner ')
    this.garageButton = document.querySelector('.button__view-garage')
    this.inpUpdate = document.querySelector('.input__update')
    this.inpCreate = document.querySelector('.input__create')
    this.buttonMenu = document.querySelector('.button-menu')
    this.buttonCreate.addEventListener('click', () =>{
      const colorCar = this.getColorCreate();
      const nameCar = this.getNameCreate();
      const car = new Car(nameCar, colorCar);
      car.createCar();
    })
    this.generateButton.addEventListener('click', () =>{
      let i = 8;
      while(i !== 0){
        let color = `rgb(${Math.floor(this.getRandomColor(0,255))},${Math.floor(this.getRandomColor(0,255))},${Math.floor(this.getRandomColor(0,255))})`
        const car = new Car(dataNameCar[this.getRandomName(0, dataNameCar.length)], `#${this.getHexRGBColor(color)}`);
        car.createCar()
        i--
      }
      
    })
    this.raceButton.addEventListener('click', (event) =>{
      if (!this.page.children.length){
        alert('Create car')
      }
      else{
        this.raceAll(event.target);
      }

    })
    this.resetButton.addEventListener('click', () =>{
      this.resetAll();
    })
    this.winnersButton.addEventListener('click', () =>{
      this.garage.style.display = 'none';
      this.inpUpdate.style.display = 'none'
      this.inpCreate.style.display = 'none'
      this.buttonMenu.style.display = 'none'
    })
    this.garageButton.addEventListener('click', () =>{
      this.garage.style.display = 'block';
      this.inpUpdate.style.display = 'block'
      this.inpCreate.style.display = 'block'
      this.buttonMenu.style.display = 'block'
    })
  }
  renderState(state){
    let i = state.length;
    state.forEach((el)=>{
      const car = new Car(el.name, el.color)
    })
    console.log(state);
   // while(i !== 0){
    //  const car = new Car(state[i].name, state[i].color);
    //  i--
   // }
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
raceAll(event){
  const buttonA = document.querySelectorAll('.car__block-buttonA')
  for (let i = 0; i < buttonA.length; i++) {
    buttonA[i].click();
   
  }
}
resetAll(){
  const buttonB = document.querySelectorAll('.car__block-buttonB')
  for (let i = 0; i < buttonB.length; i++) {
    buttonB[i].click();
    
  }
}
getRandomColor(min,max){
  return Math.random() * (max - min) + min;
}
getRandomName(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}
  
getColorCreate(){
    return this.inputColorCarCreate.value;
  }
getNameCreate(){
    if(!!this.inputNameCarCreate.value.length){
      return this.inputNameCarCreate.value;
    }
    else{
      alert('Entry name car!')
    }
  }
  
}