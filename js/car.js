export default class Car{
  constructor(nameCar, colorCar){
    this.nameCar = nameCar;
    this.colorCar = colorCar;
    this.page = document.querySelector('.page');
    this.createBlockCar(this.nameCar, this.colorCar)
  }
  createBlockCar(nameCar, colorCar){
    const carBlock = document.createElement('div')
    const buttonSelect = document.createElement('button')
    buttonSelect.innerHTML = 'select';
    buttonSelect.className = 'button__select button-blue'
    const buttonRemove = document.createElement('button')
    buttonRemove.innerHTML = 'remove';
    buttonRemove.className = 'button__remove button-blue'
    const carNameBlock = document.createElement('span')
    carNameBlock.innerHTML = nameCar;
    carBlock.className = 'car__block'
    carBlock.appendChild(buttonSelect)
    carBlock.appendChild(buttonRemove)
    carBlock.appendChild(carNameBlock)

    this.page.appendChild(carBlock);
    console.log(this.nameCar, this.colorCar);
  }
}