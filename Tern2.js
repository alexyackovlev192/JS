function manyChecks(a) {
  return (
    a > 10 ? 'a is bigger than 10 ' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case ' : '')) + (a === 15 ? '' : 'but a is not 15 ') + (a > 5 ? 'and a is greater than 5 ' : 'and a is less than or equal to 5 ') + (a % 2 ? 'and a is odd ' : 'and a is even ');
}


function myManyChecks(a) {
  result = ""
  if (a > 10) {
    result += 'a is bigger than 10 ';
    switch (a) {
      case 5:
        result += 'an example of a special case ';
      case 15: 
        result += 'a is 15 ';
        break;
      default: 
        result += 'a is not 15 ';
    }
    switch (a % 2) {
      case 1:
        result += 'and a is odd ';
        break;
      case 0: 
        result +='and a is even ';
        break;
    }
  }
  else {
    result += 'a is less than or equal to 10 ';
    switch (a) {
      case 5:
        result += 'an example of a special case ';
      case 15: 
        result += 'a is 15 ';
        break;
      default:
        result += 'but a is not 15 ';
        if (a > 5)
          result += 'and a is greater than 5 ';
        else  
          result += 'and a is less than or equal to 5 ';
    }
    switch (a % 2) {
      case 1:
        result += 'and a is odd ';
        break;
      case 0: 
        result +='and a is even ';
        break;
    }
  }
  
  return result
}

let a = Math.floor(Math.random() * 20) + 1;
console.log(`a = ${a}`);

console.log(manyChecks(a) + "\n" + myManyChecks(a))

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()