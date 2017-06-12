var $textExampleDisplay = document.querySelector('#textExampleDisplay')

var textExampleDisplay = [
  'An escalator can never break: it can only become stairs.',
  'When someone hands you a flyer, it\'s like they\'re saying here you throw this away.',
  'You know when they have a fishing show on TV? They catch the fish and then let it go. They don\'t want to eat the fish, they just want to make it late for something.'
]


function selectChar(char) {
  var $indyChar = document.createElement('span')
  $indyChar.textContent = char
  return $indyChar
}

function moveThroughTextDisplay(phrase) {
for (var i = 0; i < phrase.length; i++) {
  var $char = selectChar(phrase[i])
  $textExampleDisplay.appendChild($char)
}
}

moveThroughTextDisplay(textExampleDisplay[0])

var $current = document.querySelector('span')
$current.classList.add('current')

var $correctCount = 0
var $incorrectCount = 0
var $correctDisplay = document.querySelector('#correct-display')
var $incorrectDisplay = document.querySelector('#incorrect-display')
////****change class of character color based on input and add to score****////
window.addEventListener('keypress', function(event){
  var $current = document.querySelector('span.current')

    if ($current === null) {
      return
    }

  var $next = $current.nextElementSibling
  var $activeChar = $current.innerText



  if ($activeChar === event.key) {
    $current.classList.remove('current')
    $current.classList.add('correct')
    $correctCount++
  } else {
    $current.classList.remove('current')
    $current.classList.add('wrong')
    $incorrectCount++
  }

  $correctDisplay.textContent = $correctCount
  $incorrectDisplay.textContent = $incorrectCount

  if ($next === null) {
    return
  }
    $next.classList.add('current')
  })
