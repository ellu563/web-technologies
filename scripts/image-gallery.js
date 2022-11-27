function listClass() {
  // halutaan näyttää listana, poistetaan grid-container
  document.getElementById('image-container').classList.remove('grid-container');
  // "tuodaan näkyviin" list-container
  document.getElementById('image-container').classList.add('list-container');
}

function gridClass() {
  // halutaan näyttää taas gridinä, poistetaan list-container
  document.getElementById('image-container').classList.remove('list-container');
  // tuodaan näkyviin grid-container, classien määrittelyt css:ssä
  document.getElementById('image-container').classList.add('grid-container');
}
