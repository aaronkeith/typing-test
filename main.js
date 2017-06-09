
var $textExampleDisplay = document.querySelector('#textExampleDisplay')

var textExampleDisplay = 'An escalator can never break: it can only become stairs.'

// var charArray = textExampleDisplay.split('')

function selectChar(char) {
  var $indyChar = document.createElement('span')
  $indyChar.textContent = char
  return $indyChar
}

for (var i = 0; i < textExampleDisplay.length; i++) {
  var $char = selectChar(textExampleDisplay[i])
  $textExampleDisplay.appendChild($char)
}

var $current  = document.querySelector('span')
$current.classList.add('current')
