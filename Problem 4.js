//Problem 4
//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two 3-digit numbers.


var results = [];
testResult = results[0];

function reverse (s) {
  var o = [];
  for (var i = s.length - 1, j = 0; i >= 0; i--, j++)
    o[j] = s[i];
  return o.join('');
}

for(i = 100; i < 1000; i++){
	for(j = 100; j < 1000; j++){
		x = i * j;
		y = reverse(x.toString());
		z = parseInt(y, 10);
		if(x === z){
			results.push(x);
		}	
	}
}

testResult = results[0];

for(l = 1; l <= results.length; l++){
		if(testResult < results[l]){
		testResult = results[l];
	}
}

console.log(testResult);
