require 'prime'

def get_prime_factors(target_num)     # Get prime factors for all numbers up to the target number.
	prime_factors_collection = []       # Return the sets of prime numbers in an array.
	target_num.times do |x|
		x += 1
		prime_factors_collection << x.prime_division
	end
	prime_factors_collection
end

def condense_prime_factors(target_num) # Get the prime numbers for all numbers but only return an array 
	condensed_collection = []            # with the prime factors for the number desired.
	collection = get_prime_factors(target_num).flatten(1).sort
	target_num.times do |num|
		temp_col = []
		collection.each do |arr|
			temp_col << arr if arr[0] == num + 1
		end
		condensed_collection << temp_col[-1]
	end
	condensed_collection.compact
end

def get_lcm(target_num)                 # Get a condensed array of prime factors.  Raise each factor
	output = 1													  # to the appropriate power and multiply the results.
	condense_prime_factors(target_num).each do |arr|
		output = (arr[0] ** arr[1]) * output
	end
	output
end

p get_lcm(20)
p get_lcm(20) == 232792560