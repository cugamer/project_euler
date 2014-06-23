# Problem 1
# Find the sum of all the multiples of 3 or 5 below 1000.

output_sum = 0

1000.times do |test_num|
  if test_num % 3 == 0
    output_sum += test_num
  elsif test_num % 5 == 0
    output_sum += test_num
  end
end

p output_sum