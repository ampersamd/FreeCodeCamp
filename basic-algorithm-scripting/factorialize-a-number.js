//returns factorial of inputted integer

function factorialize(num) {
	var numX = 1;
	for (i = 1; i <= num; i++) {
		numX *= i;
	}
	return numX;
}

factorialize(5);

