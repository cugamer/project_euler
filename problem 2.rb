# Problem 2
# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

first_num = 1
second_num = 2
sum_num = 0
output_arr = []
output_num = 2

while sum_num < 4000000
  sum_num = first_num + second_num
  first_num = second_num
  second_num = sum_num
  if sum_num % 2 == 0
    output_arr.push(sum_num)
  end
end

output_arr.each do |x|
  output_num += x
end

p output_arr
p output_num