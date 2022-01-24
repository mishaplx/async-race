import Winner from "./winner.js";

export async function getCar() {
  const url = "http://127.0.0.1:3000/garage";
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

// eslint-disable-next-line consistent-return
export async function getCarID(nameCar, colorCar) {
  const colorEl = `#${colorCar}`;
  const url = "http://127.0.0.1:3000/garage";
  const response = await fetch(url);
  const data = await response.json();
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].name === nameCar && data[i].color === colorEl) {
      return data[i].id;
    }
  }
}

export async function removeCar(nameCar, colorCar) {
  const url = "http://127.0.0.1:3000/garage";
  const response = await fetch(url);
  const data = await response.json();
  data.forEach((el) => {
    if (el.name === nameCar && el.color === colorCar) {
      // eslint-disable-next-line no-shadow
      const url = `http://127.0.0.1:3000/garage/${el.id}`;
      fetch(url, { method: "DELETE" });
    }
  });
}
export async function updateCar(nameCar, colorCar) {
  const nameCarUpdate = document.querySelector(".name__car-update");
  const colorCarUpdate = document.querySelector(".color__car-update");
  const obj = {
    name: nameCarUpdate.value,
    color: colorCarUpdate.value,
  };
  const url = "http://127.0.0.1:3000/garage";
  const response = await fetch(url);
  const data = await response.json();
  data.forEach((el) => {
    if (el.name === nameCar && el.color === `#${colorCar}`) {
      // eslint-disable-next-line no-shadow
      const url = `http://127.0.0.1:3000/garage/${el.id}`;
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
  const url = `http://127.0.0.1:3000/engine/?id=${numberid}&status=${status}`;
  const response = await fetch(url, { method: "PATCH" });
  const result = await response.json();
  return result;
}
export function animation(velocity, event, status) {
  if (velocity >= 100) {
    // eslint-disable-next-line no-param-reassign
    velocity /= 10;
  }

  const carSvg = event.parentNode.parentNode.children[1].children[2];
  if (status === false) {
    carSvg.classList.remove("startAnumation");
  } else {
    carSvg.style.animationDuration = `${velocity}s`;
    carSvg.classList.add("startAnumation");
  }
}

export async function SwitchCasEnginetoDriveMode(numberid) {
  try {
    const url = `http://127.0.0.1:3000/engine/?id=${numberid}&status=drive`;
    const response = await fetch(url, { method: "PATCH" });
    const res = await response.json();
    return res;
  } catch (err) {
    animation(0, 0, false);
  }
}

export function winner(velocity, event) {
  // eslint-disable-next-line no-new
  new Winner(velocity, event);
}
