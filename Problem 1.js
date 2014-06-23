// Problem 1
// Find the sum of all the multiples of 3 or 5 below 1000.

result = 0;
for(i = 0; i < 1000; i++){
	if(i % 3 === 0){
		result += i;
	}
	if(i % 5 === 0){
		result += i;
	}
	if(i % 15 === 0){
		result -= i;
	}
}
console.log(result)