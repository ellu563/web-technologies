window.onload = function () {};

function clickThis() {
  // haetaan osoitetta html-elementin id:n perusteella, tässä se on "street", ja laitetaan arvo address muuttujaan
  let address = document.getElementById('street').value;
  // sama tehdään citylle
  let city = document.getElementById('city').value;

  // nyt voidaan laittaa address ja city kenttien arvot osoitteeseen
  let place =
    'https://www.google.com/maps?q=' + address + city + '&output=embed';
  // etsitään mapmapissa tuota osoitetta place muuttujan avulla
  document.getElementById('mapmap').src = place;

  // tyhjennä kentät kun nappia on painettu
  document.getElementById('city').value = '';
  document.getElementById('street').value = '';
}
