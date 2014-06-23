#A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

#Find the largest palindrome made from the product of two 3-digit numbers.

def find_largest_palendrome(upper_limit)
  output_num = 0
  (100..upper_limit).to_a.each do |num_one|
  	(100..upper_limit).to_a.each do |num_two|
  		test_num = num_one * num_two
      if test_num.to_s == test_num.to_s.reverse && test_num > output_num
        output_num = test_num
      end
  	end
  end
  output_num
end

p find_largest_palendrome(999)