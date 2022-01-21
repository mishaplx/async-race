import Winner from "./winner.js";
export async function getCar() {
  
  let url = "http://127.0.0.1:3000/garage";
  let response = await fetch(url)
  let result = await response.json();
  return result
}
export async function getCarID(nameCar, colorCar) {
  //debugger
  let colorEl = `#${colorCar}`
  let url = "http://127.0.0.1:3000/garage";
  let response = await fetch(url);
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === nameCar && data[i].color === colorEl) {
     return data[i].id;
     }
  }
    }

export async function removeCar(nameCar, colorCar) {
  let url = "http://127.0.0.1:3000/garage";
  let response = await fetch(url);
  const data = await response.json();
  data.forEach(el => {
    
    if (el.name === nameCar && el.color === colorCar) {
      let url = `http://127.0.0.1:3000/garage/${el.id}`;
      fetch(url, { method: "DELETE" });
    }
  });
}
export async function updateCar(nameCar, colorCar) {
  let nameCarUpdate = document.querySelector(".name__car-update");
  let colorCarUpdate = document.querySelector(".color__car-update");
  console.log(colorCarUpdate.value);
  let obj = {
    name: nameCarUpdate.value,
    color: colorCarUpdate.value,
  };
  let url = "http://127.0.0.1:3000/garage";
  let response = await fetch(url);
  const data = await response.json();
  data.forEach(el => {
    if (el.name === nameCar && el.color === `#${colorCar}`) {
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

export async function StartStopCarsEngine(numberid, status) {

  let url = `http://127.0.0.1:3000/engine/?id=${numberid}&status=${status}`;
 // debugger
  let response = await fetch(url,{method: "PATCH"});
  const result = await response.json();
  return result
}
export async function SwitchCasEnginetoDriveMode(numberid){
  try{
  let url = `http://127.0.0.1:3000/engine/?id=${numberid}&status=drive`;
  //debugger
  let response = await fetch(url,{method: "PATCH"});
  const res = await response.json();
  return res;
  }
  catch(err){
    animation(0,0,false)
  }
}
export function animation(velocity, event,status){
  if(velocity >= 100){
   // debugger
    velocity = velocity / 10
  }
  else{
    velocity = velocity 
  }
  
  const carImgBlock = document.querySelector('.car__block-img')
  const S = carImgBlock.offsetWidth;
  let carSvg = event.parentNode.parentNode.children[1].children[2]
  if (status == false){
    
    carSvg.classList.remove('startAnumation')
  }
  else{
   // console.log(carSvg.offsetWidth);
   //debugger
    carSvg.style.animationDuration = `${velocity}s`
    carSvg.classList.add('startAnumation')
  }
 
  
  

  /*
  carSvg.animate([
      // keyframes
      { left: '0px' },
      { left: `${S - 100}px` }
    ], {
      // timing options
      duration: velocity,
      iterations: 1,
      'fill': 'forwards'
    })
  const parentNode = event.parentNode;
  let left = 0;
  //const speed = this.getRandom(1, 100);
  
  console.log(S);
    const time = (S /10 / velocity).toFixed(2);
    console.log(time);

    let x = setInterval(() => {
      
      left = left + velocity / 5;
      parentNode.children[2].style.left = `${left}px`;

      if (
        parseInt(parentNode.children[2].style.left, 10) >=
        carImgBlock.offsetWidth - velocity - 50 || status == false
      ) {
        clearInterval(x);
      }
    }, 100);
*/
}

export function winner(velocity, event) {
  const winner = new Winner(velocity, event)
  
}