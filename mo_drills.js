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
pal('racecar')

// alphbetical
function alpha(str) {
  var makeArr = str.split('')
  var sortArr = makeArr.sort()
  var backToString = sortArr.join('')
  return backToString
}
alpha('makethisatoz')

// capitalize
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

function word(str) {

}