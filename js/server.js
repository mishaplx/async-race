export async function getCar() {
  
  let url = "http://127.0.0.1:3000/garage";
  let response = await fetch(url)
  let result = await response.json();
  return result
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