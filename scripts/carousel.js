let dogs_array = [
  { name: 'Heska', src: 'images/heselius.jpg' },
  { name: 'Puppy', src: 'images/puppy.jpg' },
  { name: 'Mustakoira', src: 'images/mustakoira.jpg' },
];

let index;

$(function () {
  if (localStorage.hasOwnProperty('myCat')) {
    index = localStorage.getItem('myCat');
  } else {
    index = 1;
  }
  // index = 1;
  $('#text-content').text(dogs_array[index].name);
  $('#imgkaruselli').attr(dogs_array[index]).src;
});

$('#prev').click(function () {
  index = index - 1;
  // jos edellistä ei ole, näytä viimeinen
  if (index < 0) {
    for (let i = 1; i < dogs_array.length; i++) {
      index = dogs_array.length - 1;
    }
  }
  localStorage.setItem('myCat', index);
  $('#text-content').text(dogs_array[index].name);
  $('#imgkaruselli').attr(dogs_array[index]).src;
});

// tehty clickit suoraan id:n mukaan, eli ei onclick=function() tyylillä
$('#next').click(function () {
  index = index + 1;
  // jos seuraavaa ei ole, näytä indeksin ensimmäinen
  if (index > dogs_array.length - 1) {
    index = 0;
  }
  // efekti jota klikkaamalla kuva menee ylös sumppuun, ja kun klikkaat uudelleen "next", seuraava kuva tulee sumpusta ulos
  $('#imgkaruselli').slideToggle('slow', function () {
    // Animation complete.
  });

  localStorage.setItem('myCat', index);
  $('#text-content').text(dogs_array[index].name);
  $('#imgkaruselli').attr(dogs_array[index]).src;
});

// 3. play nappi ja sen funktio timely

let nIntervId;
$('#play').click(function () {
  /* ajastettu toiminto toteutetaan setInterval() -metodilla, 
  joka kutsuu toistuvasti funktiota kiinteällä aikaviiveellä.*/
  if (!nIntervId) {
    nIntervId = window.setInterval(timely, 3000);
  } else {
    window.clearInterval(nIntervId);
  }
  /* toiminto perutaan kutsumalla clearInterval() -metodia ja 
  parametriksi annetaan toistuvan toiminnon tunniste. */
});

function timely() {
  // täällä määritellään mitä ajastettu toiminto tekee,
  // vaihdetaan kuvakarusellin kuvaa ja kuvatekstiä käyttämällä nextiä
  $('#next').click();
}
