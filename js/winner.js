export default class Winner{
  constructor(winner){
    this.numberBlock = document.querySelector('.number__id')
    this.carSvgBlock = document.querySelector('.car')
    this.nameCarBlock = document.querySelector('.name__car')
    this.winBlock = document.querySelector('.win')
    this.bestTimeBlock = document.querySelector('.best__time')
    //console.log(winner);
    this.getWinner()
  }
  async getWinner(){
    let url = "http://127.0.0.1:3000/winners";

    
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
  }
}