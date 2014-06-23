#The prime factors of 13195 are 5, 7, 13 and 29.

#What is the largest prime factor of the number 600851475143?

# input_num = 600851475143

def find_prime_factors(input_num)
	test_num = 2
	factors = []
	while input_num > 1
	  if input_num % test_num == 0
	    factors.push(test_num)
	    input_num = input_num / test_num
	    test_num = 2
	  else
	    test_num += 1
	  end
	end
	factors
end


p find_prime_factors(600851475143)[-1]