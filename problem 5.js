function getPrimeFactors(targetNum){    // Get all prime factors for a given number.  Return in array.
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

function getAllPrimeSets(targetNum){		// Run through all numbers from zero up to target, getting all prime 
	primeFactors = []											// factors for each.  Return in 2d array.
	for(var i = 0; i < targetNum; i++){
		primeFactors.push(getPrimeFactors(i))
	}
	return primeFactors
}

function condensePrimeFactors(targetArray, biggestNum){
	largestPrimeSets = [];								// Just want the total number of prime factors for each number up to the
	currentNum = 0;												// target.  Function loops through the target array for all numbers up to
	while(currentNum < biggestNum){				// target, grabbing the max no of factors for each number.  Returns in 
		var currentArray = []								// flattened array.
		for(var i = 0; i < targetArray.length; i++){
			if(targetArray[i].length > 0){
				if(targetArray[i][0] === currentNum && targetArray[i].length > currentArray.length){
					currentArray = targetArray[i]
				}
			}
		}
		largestPrimeSets.push(currentArray)
		currentNum++;
	}
	return [].concat.apply([], largestPrimeSets)
}

function getArraySum(inputArr){    			// Takes input array, multiplies all input numbers and returns the sum.
  outputNum = 1;												// When fed an array of prime factors gives the desired LCM.
  for(var i = 0; i < inputArr.length; i++){
		outputNum *= inputArr[i];
	}
  return outputNum;
}

multiplePrimeFactors = getAllPrimeSets(20)
condensedPrimeFactors = condensePrimeFactors(multiplePrimeFactors, 20)
console.log(getArraySum(condensedPrimeFactors))

oneToTwenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function testFactors(inputNums, sumNum){ // Simple test.  Not a guarantee of accuracy but better then nothing.
	for(var i = 0; i < inputNums.length; i++){
		if(sumNum % inputNums[1] != 0){
			return false
		}
	}
	return true
}

console.log(testFactors(oneToTwenty, 232792560))