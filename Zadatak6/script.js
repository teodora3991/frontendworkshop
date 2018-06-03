function check () {

    var broj = parseInt(document.getElementById('br1').value);
    var message = '';

    if (broj > 100) {
        message = 'Broj je veci od 100';
    } else if (broj < 100) {
        message = 'Broj je manji od 100';
    } else {
        message = 'Broj je jednak 100';
    }

    document.getElementById('message').value = message;
}