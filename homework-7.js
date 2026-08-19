const showWeather = (city, temperature) => {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
};

showWeather("Бишкек", 25);


const LIGHT_SPEED = 299792458;

const compareSpeed = (speed) => {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
  } else if (speed < LIGHT_SPEED) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
};

compareSpeed(300000);

const productName = "Наушники";
const productPrice = 3500;

const buyProduct = (budget) => {
  if (budget >= productPrice) {
    const change = budget - productPrice;
    console.log(`${productName} приобретён. Спасибо за покупку! Сдача: ${change}$`);
  } else {
    const missingMoney = productPrice - budget;
    console.log(`Вам не хватает ${missingMoney}$, пополните баланс`);
  }
};

buyProduct(3500);

const calculateDifference = (firstNumber, secondNumber) => {
  console.log(firstNumber - secondNumber);
};

calculateDifference(100, 40);

const studentName = "Imran";
const homeworkNumber = 7;
const lessonTopic = "JavaScript";