# palindrome
require 'pry'
def remove_spec(str)
  @str = str.gsub(/\W|\_/, "").downcase
  pal
end

def pal
  (@str.length/2).times do |i|
    if (@str[i] != @str[-(i + 1)])
      return false
      puts 'false'
    end
  end
  true
  puts 'true'
end

remove_spec('racecar')

# alphabetical