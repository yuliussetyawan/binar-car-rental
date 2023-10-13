// Cara ke-1 menggunakan bubble sort
function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < result.length-1; i++){
    for (let j = 0; j < result.length - 1; j++){
      // Bubble sort
      if (result[j].year < result[j + 1].year){
        let temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
      }
    }
  }
  
  console.table(result);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}


// Cara ke-2 menggunakan array swap
/*
function sortCarByYearDescendingly(cars) {
  const result = [...cars];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j].year < result[j + 1].year) {
        // array swap (https://www.freecodecamp.org/news/swap-two-array-elements-in-javascript/)
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  console.table(result);
  return result;
}
*/


// Cara ke-3 menggunakan sort method
/*
function sortCarByYearDescendingly(cars) {
  const result = [...cars].sort((a, b) => b.year - a.year);
  console.table(result);
  return result;
}
*/