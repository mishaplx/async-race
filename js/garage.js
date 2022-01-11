import Car from './car.js';
import {data, dataNameCar} from './data.js';
export default class Garage{
  constructor(){
    this.data = data;
    this.buttonCreate = document.querySelector('.button__create')
    this.inputNameCarCreate = document.querySelector('.name__car-create')
    this.inputColorCarCreate = document.querySelector('.color__car-create')
    this.updateButton = document.querySelector('.button__update')
    this.generateButton = document.querySelector('.button-menu-generate')
    this.raceButton = document.querySelector('.button-menu-race')
    this.resetButton = document.querySelector('.button-menu-reset')
    this.page = document.querySelector('.page')
    this.buttonCreate.addEventListener('click', () =>{
      const colorCar = this.getColorCreate();
      const nameCar = this.getNameCreate();
      const car = new Car(nameCar, colorCar);
     car.start();
    })
    this.generateButton.addEventListener('click', () =>{
      let i = 5;
      while(i !== 0){
        const car = new Car(dataNameCar[this.getRandomName(0, dataNameCar.length)] ,`rgb(${this.getRandomColor(0,255)},${this.getRandomColor(0,255)},${this.getRandomColor(0,255)})`);
        i--
      }
      
    })
    this.raceButton.addEventListener('click', () =>{
      if (!this.page.children.length){
        alert('Create car')
      }
      else{
        this.raceAll();
      }

    })
    this.resetButton.addEventListener('click', () =>{
      this.resetAll();
    })
   
  }
  
raceAll(){
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
getRandomCarName(){

}
  
}