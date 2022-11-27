var i;

$(function () {
  // kun sivu ladataan, piilotetaan lataus gif
  $('#gif').hide();
  i = 0;
});

$('#btn').click(function () {
  let sentenceUrl = 'https://api.chucknorris.io/jokes/random';

  // kun nappia on klikattu, näytetään latausympyrä
  $('#gif').show();

  // tehdään ajax-kutsu
  $.ajax({
    url: sentenceUrl,
    type: 'GET',
    dataType: 'json',
    success: function (response) {
      // show data in DIV
      // $('#sentence').append('<br>' + '<i>' + response.value.joke + '</i>');
      i++;
      // tehdään aina uusi accordion-item johon vitsi laitetaan
      let data =
        '<div class="accordion-item">' +
        '<h2 class="accordion-header" id="headingOne' +
        i +
        '">' +
        '<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">' +
        'Vitsi ' +
        i +
        '</button>' +
        '</h2>' +
        '<div id="collapseOne" ' +
        i +
        '"class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">' +
        '<div class="accordion-body">' +
        response.value +
        '</div>' +
        '</div>' +
        '</div>';

      $('#accordionExample').append(data);
    },
    error: function (jqxhr, textStatus, error) {
      console.log('Error: ' + textStatus);
    },
  }).done(function () {
    // piilotetaan gif
    $('#gif').hide();
    // lasketaan monta vitsiä on haettu
    $('#laskin').text('Laskuri: ' + i);
  });
});

// Animaatio näytetään ajax-kutsun suorittamisen ajan.
// Kun ajax-kutsu on suoritettu, animaatio taas piilotetaan.
