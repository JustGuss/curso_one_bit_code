function sum(...numbers /* array */) {
    return numbers.reduce((accum, num) => accum + num, 0);
    //soma todos os valores do array
  }
  
  console.log(sum(1, 1)); // == 2
  console.log(sum(2, 2, 2, 2, 2)); // == 10
  console.log(sum(32, 5, 74, 7, 1, 9, 90)); // == 218

  //O rest Param deve ser o ultimo parametro passado para a função, pois dele em diante os proximos valores serão identificados como parte de um array