// palindrome
function pal(str) {
  var reg = /[^A-Za-z0-9]/g
  str = str.toLowerCase().replace(reg, '')
  var l = str.length
  for (i = 0; i < l / 2; i++) {
    if (str[i] !== str[l-i-1]) {
      return false
    }
  }
  return true
}
console.log(pal('racecar'))

// alphbetical
function alpha(str) {
  var makeArr = str.split('')
  var sortArr = makeArr.sort()
  var backToString = sortArr.join('')
  return backToString
}
console.log(alpha('makethisatoz'))

// title case
function caps(str) {
  words = str.split(' ')
  for (var i = 0; i < words.length; i++) {
    words[i] = capWord(words[i])
  }
  capString = words.join(' ')
  return capString

  function capWord(str) {
    str = str.charAt(0).toUpperCase('') + str.slice(1)
    return str
  }
}
console.log(caps('this needs upper case'))

// longest word
function longestWord(string) {
  str = string.split(" ")
  var longest = 0
  var word = null
  str.forEach(function(str) {
      if (longest < str.length) {
          longest = str.length
          word = str
      }
  })
  return word;
}
console.log(longestWord('My name is Cornelius and it is long'))

// vowel count
function vowelCount(string) {
  var reg = /[^A-Za-z0-9]/g
  str = string.toLowerCase().replace(reg, '')
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var count = 0
  str.split('').forEach(function(letter) {
    if (vowels.includes(letter))
      count++
  })
  return count
}
console.log(vowelCount('Do you know how many vowels are in this sentence?'))

// prime
function prime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}
console.log(prime(439))

// type
function whichType(input) {
  return typeof(input)
}
console.log(whichType())

// penultimate low and high
function penult() {
  var arr = [1,2,3,4,5,6,7,8,9,10]
  var lowHigh = []
  var seclow = arr[1]
  lowHigh.push(seclow)
  var sechigh = arr.length - 1
  lowHigh.push(sechigh)
  return lowHigh
}

console.log(penult())

// positive int factors
function factors(n) {
  var numFactors = [], i
  
  for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
    if (n % i === 0) {
      numFactors.push(i)
      if (n / i !== i)
        numFactors.push(n / i)
   }
   numFactors.sort(function(x, y) {
     return x - y;})
   
   return numFactors
 }
 console.log(factors(27))

 // coins