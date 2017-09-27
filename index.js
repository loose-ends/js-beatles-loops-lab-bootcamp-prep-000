function theBeatlesPlay(musicians,instruments) {
<<<<<<< HEAD
  var array=[]
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(facts)  {
  var array = []
  var i = 0
  while (i < facts.length) {
    array.push(facts[i] + "!!!")
    i++
  }
  return array
}

function iLoveTheBeatles(number)  {
  var array=[]
do {
 array.push("I love the Beatles!")
 number++
} while (number < 15)
 return array
=======
  var i
  for (i = 0; i < 4; i++) {
    theBeatlesPlay.push(musicians[i] + " plays " + instruments[i])
  }
  return theBeatlesPlay
>>>>>>> b2bf6c156ca52d3872d52670a44b1739f059d565
}
