// Cara ke-1 menggunakan for loop
function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available) {
      result.push(cars[i]);
    }
  }
  console.table(result);
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}

// Cara ke-2 menggunakan method forEach
/*
function filterCarByAvailability(cars) {
  const result = [];
    cars.forEach((car) => {
    if (car.available) {
      result.push(car);
    }
  });
  console.table(result);
  return result;
}
*/
