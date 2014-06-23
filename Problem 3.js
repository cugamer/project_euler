//Problem 3
//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?

//Ans [71, 839, 1471, 6857]


function getPrimeFactors(targetNum){
	var workingNum = 1;
	var primeFactors = [];
	while(targetNum > 1){
		workingNum++;
		if(targetNum % workingNum === 0){
			primeFactors.push(workingNum);
			targetNum = targetNum / workingNum;
			workingNum = 1;
		}
	}
	return primeFactors
}

console.log(getPrimeFactors(600851475143).pop())