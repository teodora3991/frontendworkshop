function check () {

    var broj = parseInt(document.getElementById('br1').value);
    var message = '';

    if (broj %2 === 0) {
        message = 'Broj je paran.'
    } else {
        message = 'Broj je neparan.'
    }

    document.getElementById('message').value = message;
}