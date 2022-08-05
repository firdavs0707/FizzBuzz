var elForm = document.querySelector('.form');
var elForm2 = document.querySelector('.form2');
var elInput = document.querySelector('.input1');
var elSelectLanguage = document.querySelector('.language');
var elResult = document.querySelector('.result');
var elExplain = document.querySelector('.explain');
var option1 = document.querySelector('.option1');
var elSelection = document.querySelector('.selection');
var elButton = document.querySelector('.btn');


elForm2.addEventListener('submit', function (evt) {
  evt.preventDefault();

  if (elSelectLanguage.value == 11) {
    elExplain.textContent = 'Son kiriting';
    elResult.textContent = 'Javob shu yerda aks ettiriladi!';
    elButton.textContent = 'Jonatish';
    return;
  }else if (elSelectLanguage.value == 12) {
    elExplain.textContent = 'Введите число';
    elResult.textContent = 'Ответ будет отображаться здесь!';
    elButton.textContent = 'Готова';
    return;
  }else if (elSelectLanguage.value == 13) {
    elExplain.textContent = 'Enter a number';
    elResult.textContent = 'Answer will be displayed here!';
    elButton.textContent = 'Done';
    return;
  };
})

elForm.addEventListener('submit', function(event){
  event.preventDefault();

  if (elSelectLanguage.value == 11) {
    if (isNaN(elInput)) {
      elResult.textContent = 'Son kiriting!';
    } 

    if (elInput.value == 0) {
      elResult.textContent = 'Xechnima kiritilmadi!';
      return;
    } else if ((elInput.value % 3 == 0) && (elInput.value % 5 == 0)) {
      elResult.textContent = 'FizzBuzz';
      return;
    } else if (elInput.value % 3 == 0) {
      elResult.textContent = 'Fizz';
      return;
    } else if (elInput.value % 5 == 0) {
      elResult.textContent = 'Buzz';
      return;
    } else {
      elResult.textContent = 'Siz kiritgan son 3 yoki 5 ga bolinmaydi';
    }
  }

  if (elSelectLanguage.value == 12) {
    if (isNaN(elInput)) {
      elResult.textContent = 'Введите число!';
      return;
    }
    if (elInput.value == 0) {
      elResult.textContent = 'Ничего не вошло!';
      return;
    } else if ((elInput.value % 3 == 0) && (elInput.value % 5 == 0)) {
      elResult.textContent = 'FizzBuzz';
      return;
    } else if (elInput.value % 3 == 0) {
      elResult.textContent = 'Fizz';
      return;
    } else if (elInput.value % 5 == 0) {
      elResult.textContent = 'Buzz';
      return;
    } else {
      elResult.textContent = 'Введенное вами число не делится ни на 3, ни на 5';
    }
  }
})


