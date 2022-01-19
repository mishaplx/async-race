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
 // data.forEach(el => {
 //   if (el.name === nameCar && el.color === colorEl) {
  //   return el.id
    }
  //});
//}
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
  let response = await fetch(url,{method: "PATCH"});
  const data = await response.json();
 console.log(data);
}
export async function SwitchCasEnginetoDriveMode(){
  let url = `http://127.0.0.1:3000/engine/?id=1&status=drive`;
  let response = await fetch(url,{method: "PATCH"});
  const data = await response.json();
 console.log(data);
}