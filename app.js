$(document).ready(function(){
	function fizzBuzzRefactor(){
		var number = prompt('Please supply a positive integer.');
		var integer = parseInt(number);
		console.log(integer);
		for (var i = 1; i <= integer; i++) {
	var isDividibleByThree = i % 3 === 0;
	var isDivisibleByFive = i % 5 === 0;

	if (isDividibleByThree && isDivisibleByFive) {
		document.write('FizzBuzz<br />');
	}
	else if (isDividibleByThree) {
		document.write('Fizz<br />');
			}
	else if (isDivisibleByFive) {
		document.write('Buzz<br />');
	}
	else {
		document.write(i.toString()+'<br />');
	}
}


}
fizzBuzzRefactor()
})