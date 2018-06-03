
var sum = 0;

function add() {

    
    var broj1 = document.getElementById('br1').value;
    
    sum = sum + parseInt(broj1);

    console.log(sum);
    document.getElementById('br2').value = sum;
    document.getElementById('br1').value = '';
}