// Задание 3: объект с личными данными
const myProfile = {
  firstName: "Имран",
  lastName: "Dolichosephalic1",
  email: "imran@example.com",
  job: "Frontend Developer",
  age: 22,
  country: "Кыргызстан",
  city: "Манас",
};

// Задание 4: объект с данными об автомобиле
const car = {
  brand: "Mercedes-Benz",
  model: "E-Class W211",
  year: 2008,
  color: "темно-синий",
  transmission: "Автомат",
};
car.owner = myProfile;

// Задание 5: проверка и добавление свойства "максимальная скорость"
function addMaxSpeed(carObject, speed) {
	if (carObject.hasOwnProperty("максимальная скорость")) {
		console.log(`Максимальная скорость уже задана: ${carObject["максимальная скорость"]}`);
		return;
	}
	carObject["максимальная скорость"] = speed;
	console.log(`Задана новая максимальная скорость: ${speed}`);
}

addMaxSpeed(car, 220);

// Задание 6: получить значение свойства по названию
function getPropertyValue(object, propertyName) {
	console.log(`Значение свойства "${propertyName}": ${object[propertyName]}`);
}

getPropertyValue(car, "color");
getPropertyValue(myProfile, "city");

// Задание 7: массив с названиями продуктов
const products = ["Молоко", "Хлеб", "Яйца", "Сыр", "Кофе"];
console.log(products);

// Задание 8: массив объектов-книг
const books = [
	{ 
    title: "Мастер и Маргарита", 
    author: "Михаил Булгаков", 
    year: 1967, 
    coverColor: "Чёрный", 
    genre: "Роман" 
  },
	{ 
    title: "1984", 
    author: "Джордж Оруэлл", 
    year: 1949, 
    coverColor: "Красный", 
    genre: "Антиутопия" 
  },
	{ 
    title: "Гарри Поттер и философский камень", 
    author: "Джоан Роулинг", 
    year: 1997, 
    coverColor: "Синий", 
    genre: "Фэнтези" },
];

books.push(
  { 
    title: "Дюна", 
    author: "Фрэнк Герберт", 
    year: 1965, 
    coverColor: "Оранжевый", 
    genre: "Фантастика" 
  }
);
console.log(`Добавлена книга: "${books[books.length - 1].title}"`);

// Задание 9: массив книг о Гарри Поттере + объединение
const harryPotterBooks = [
	{ 
    title: "Гарри Поттер и Тайная комната", 
    author: "Джоан Роулинг", 
    year: 1998, 
    coverColor: "Зелёный", 
    genre: "Фэнтези" 
  },
	{ 
    title: "Гарри Поттер и Узник Азкабана", 
    author: "Джоан Роулинг", 
    year: 1999, 
    coverColor: "Розовый", 
    genre: "Фэнтези" },
	{ 
    title: "Гарри Поттер и Кубок огня", 
    author: "Джоан Роулинг", 
    year: 2000, 
    coverColor: "Голубой", 
    genre: "Фэнтези" },
];

const allBooks = [...books, ...harryPotterBooks];

// Задание 10: добавляем свойство isRare с помощью map
function markRareBooks(booksArray) {
	return booksArray.map((book) => ({
		...book,
		isRare: book.year > 2000,
	}));
}

const booksWithRareFlag = markRareBooks(allBooks);

booksWithRareFlag.forEach((book) => {
	if (book.isRare) {
		console.log(`Книга "${book.title}" является редкой!`);
	} else {
		console.log(`Книга "${book.title}" не является редкой.`);
	}
});