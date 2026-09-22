/*
1. Найти элемент инпут
2. Обработать клик на кнопку
3. При первом клике нам нужно заменить 0 на число
4. При втором клике нам нужно склеить строки
5. И когда мы нажмем на равно то разложить на первое число второе число и знак
6. в зависимости какой знак + или минус или другой - посчитать
7. Обновить инпут
 */

const display =  document.getElementById('display');

function appendValue(value) {
  if (display.value === '0') {
    display.value = value;
  } else {
    display.value +=  value;
  }
}

function clearDisplay() {
  display.value = '0';
}

function calculate() {
  const expression = display.value;
  const operator = ['+', '-', '*', '/'].find(item => expression.includes(item));

  if (!operator) {
    return
  }

  const [firstNumber, secondNumber] = expression.split(operator);

  display.value = calculateResult(+firstNumber, +secondNumber, operator);

  // display.value = eval(expression);
}

function calculateResult(firstNumber, secondNumber, operator) {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
     case '-':
       return firstNumber - secondNumber;
     case '*':
       return firstNumber * secondNumber;
    case '/':
      return secondNumber === 0 ? 'Error' : firstNumber / secondNumber;
  }
}