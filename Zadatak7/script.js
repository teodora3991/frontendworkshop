function check () {

    var broj = parseInt(document.getElementById('br1').value);
    var message = '';

    if (broj %2 === 0 && broj>100) {
        message = 'Broj je paran i veci od 100.'
    } else if (broj %2 !== 0 && broj < 100) {
        message = 'Broj je neparan i manji od 100.'
    } else {
        message = 'Nista od ta dva.'
    }

    document.getElementById('message').value = message;
}