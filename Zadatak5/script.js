var arrayOfNumbers = [];

//adds the numbers to the array
function add () {
    var broj = document.getElementById('br1').value;

    arrayOfNumbers.push(parseInt(broj));
    console.log(arrayOfNumbers);
    console.log('Br elemenata niza: ' + arrayOfNumbers.length);

    document.getElementById('br1').value = '';
}

//sums the values from the array
function sum () {

    var sumNum = 0;

    for(var i = 0; i < arrayOfNumbers.length; i++) {

        //console.log('i = ' + i);
        //console.log(arrayOfNumbers[i]);
        sumNum += arrayOfNumbers[i];
    }

    document.getElementById('sum').value = sumNum;

    return sumNum;
}

//calculates the average value from the array
function avg () {
    var sumNum = sum();
    var avgNum = sumNum/arrayOfNumbers.lenght;

    document.getElementById('avg').value = avgNum;
}