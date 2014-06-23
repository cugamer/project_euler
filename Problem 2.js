// Problem 2
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

valueOne = 1;
valueTwo = 2;
outPutValue = 2;
while(valueTwo < 4000000){
	tempValue = valueOne;
	valueOne = valueTwo;
	valueTwo = tempValue + valueTwo;
	if(valueTwo % 2 === 0 && valueTwo < 4000000){
		outPutValue = outPutValue + valueTwo;
	}
}

console.log(outPutValue);