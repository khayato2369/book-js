console.log('test')

function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
    } else if (num % 3 === 0) {
        return 'fizz';
    } else if (num % 5 === 0) {
        return 'buzz';
    } else {
        return num;
    }
}
fizzbuzz(15);





let i = 1;
while (i <= 100000) {
    console.log(fizzbuzz(i));
    i++;
}