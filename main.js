
var $textExampleDisplay = document.querySelector('#textExampleDisplay')

var textExampleDisplay = 'An escalator can never break: it can only become stairs.'

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

window.addEventListener('keypress', function(event){
  var $current = document.querySelector('span.current')
  var $next = $current.nextElementSibling
  var $activeChar = $current.innerText
  if ($activeChar === event.key) {
    $current.classList.remove('current')
    $current.classList.add('correct')
  } else {
    $current.classList.remove('current')
    $current.classList.add('wrong')
  }
  return $next.classList.add('current')
})



