import Car from './car.js';
export default class Garage{
  constructor(){
    this.buttonCreate = document.querySelector('.button__create')
    this.inputNameCarCreate = document.querySelector('.name__car-create')
    this.inputColorCarCreate = document.querySelector('.color__car-create')
    this.updateButton = document.querySelector('.button__update')
  
    
    this.buttonCreate.addEventListener('click', () =>{
      const colorCar = this.getColorCreate();
      const nameCar = this.getNameCreate();
      const car = new Car(nameCar, colorCar);
     
    })
   
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