let defaultValue;
let defaultValue2;

// jQueryllä
// saadaan sivun latauksen yhteydessä joku numero siihen esiin
$(function () {
  // arvo 1 ja 10 väliltä
  defaultValue = Math.floor(Math.random() * 10) + 1;
  defaultValue2 = Math.floor(Math.random() * 10) + 1;
  $('#first-nr').val(defaultValue); // päivitetään defaultValue first-nr:n
  $('#second-nr').val(defaultValue2);
});

/*
window.onload = function () {
  defaultvalue = 5;
  document.getElementById("first-nr").value = defaultValue; 
  document.getElementById("second-nr").value = defaultValue;
}; */

// jos painetaan + painiketta, kasvatetaan numeroa yhdellä, muussa tapauksessa vähennetään sitä yhdellä
function setFirstNr(type) {
  // let currentValue = document.getElementById('first-nr').value; // luetaan arvo ja asetetaan muuttujaan
  let currentValue = $('#first-nr').val();

  if (type == 'plus') {
    currentValue = parseInt(currentValue) + 1; // parseInt = muutetaan intiksi
  } else {
    currentValue = parseInt(currentValue) - 1;
  }
  // document.getElementById('first-nr').value = currentValue; // päivitetään uusi arvo kyseiseen elementtiin
  $('#first-nr').val(currentValue); // first-nr id:n omistavan elementin arvo on nyt currentValue
}

// sama toiselle palkille, jos painetaan + painiketta, kasvatetaan numeroa yhdellä, muussa tapauksessa vähennetään sitä yhdellä
function setSecondNr(type) {
  let currentValue = $('#second-nr').val();

  if (type == 'plus') {
    currentValue = parseInt(currentValue) + 1; // parseInt = muutetaan intiksi
  } else {
    currentValue = parseInt(currentValue) - 1;
  }
  // document.getElementById('first-nr').value = currentValue; // päivitetään uus arvo kyseiseen elementtiin
  $('#second-nr').val(currentValue);
}

// lukee molempien kenttien arvot ja selvittää mikä laskutoimitus valittu, suorittaa laksutoimitus, ja näyttää sen tulos
function calculate() {
  // mikä operation select pudotusvalinnan valinta on valittu
  let selectedText = $('#operationSelect option:selected').text();

  let first = $('#first-nr').val();
  first = parseInt(first);

  let second = $('#second-nr').val(); // luetaan second-nr html elemtin arvo
  second = parseInt(second); // varmistetaan että se on kokonaisluku

  // jos text on "+" niin laske yhteen yms
  if (selectedText == '+') {
    // laitetaan result-html elementtiin laskun tulos
    $('#result').val(first + second);
  }
  if (selectedText == '-') {
    $('#result').val(first - second);
  }
  if (selectedText == '*') {
    $('#result').val(first * second);
  }
  if (selectedText == '/') {
    $('#result').val(first / second);
  }
}

// tapahtumakäsittelijä jqueryllä
// eli kun klikataan calc-buttonia suoritetaan calculate function sekä validateForm
$('#calc-button').click(function () {
  calculate();
  validateForm();
});

// valioidaan että numerot ovat molemmissa boxeissa
function validateForm() {
  let x = document.forms['myForm']['first-nr'].value;
  if (x == '') {
    alert('There is no number in the first box');
    return false;
  }

  let z = document.forms['myForm']['second-nr'].value;
  if (z == '') {
    alert('There is no number in the second box');
    return false;
  }
}
