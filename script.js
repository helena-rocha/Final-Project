const names = ['1. First instruction, do not make any spelling mistakes, make sure you enter a specific answer ', ' 2. Second instruction, after inserting you answer click the "click me" button on the right ', ' 3. third instruction, Do not search up answers because then you are not playing fairly ', ' 4. fourth instruction, when you get to the bottom of the quiz, do not click the button if you do not want to complete the ultimate riddle (there will be consequences) ', ' 6. fifth instruction, make sure to keep track of your score ', ' 6. sixth instruction, HAVE FUN!!']

for (let i = 0; i < names.length; i++) {
  document.getElementById('instructions').innerHTML = (names)
}

function startbuttondisapear() {
  document.getElementById('second-riddle').style.display = 'none'
  document.getElementById('third-riddle').style.display = 'none'
  document.getElementById('fourth-riddle').style.display = 'none'
  document.getElementById('fifth-riddle').style.display = 'none'
  document.getElementById('sixth-riddle').style.display = 'none'
  document.getElementById('seventh-riddle').style.display = 'none'
  document.getElementById('eighth-riddle').style.display = 'none'
  document.getElementById('dont-click-me').style.display = 'none'
}

document.getElementById('button-1').addEventListener('click', function1)
document.getElementById('button-2').addEventListener('click', function2)
document.getElementById('button-3').addEventListener('click', function3)
document.getElementById('button-4').addEventListener('click', function4)
document.getElementById('button-5').addEventListener('click', function5)
document.getElementById('button-6').addEventListener('click', function6)
document.getElementById('button-7').addEventListener('click', function7)
document.getElementById('button-8').addEventListener('click', function8)
document.getElementById('button9').addEventListener('click', donotclickme)

let riddle1 = 0
let riddle2 = 0
let riddle3 = 0
let riddle4 = 0
let riddle5 = 0
let riddle6 = 0
let riddle7 = 0
let riddle8 = 0

function function1() {
  riddle1 = document.getElementById('answer-1').value
  if (riddle1 === 'An egg' || riddle1 === 'an egg' || riddle1 === 'egg' || riddle1 === 'Egg' || riddle1 === 'an Egg' || riddle1 === 'An Egg') {
    document.getElementById('paragraph').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph').innerHTML = 'Incorrect'
  }
}

function disapear_button1() {
  document.getElementById('first-riddle').style.display = 'none'
  document.getElementById('second-riddle').style.display = 'block'
}

function disapear_button2() {
  document.getElementById('second-riddle').style.display = 'none'
  document.getElementById('third-riddle').style.display = 'block'
}

function disapear_button3() {
  document.getElementById('third-riddle').style.display = 'none'
  document.getElementById('fourth-riddle').style.display = 'block'
}

function disapear_button4() {
  document.getElementById('fourth-riddle').style.display = 'none'
  document.getElementById('fifth-riddle').style.display = 'block'
}

function disapear_button5() {
  document.getElementById('fifth-riddle').style.display = 'none'
  document.getElementById('sixth-riddle').style.display = 'block'
}

function disapear_button6() {
  document.getElementById('sixth-riddle').style.display = 'none'
  document.getElementById('seventh-riddle').style.display = 'block'
}

function disapear_button7() {
  document.getElementById('seventh-riddle').style.display = 'none'
  document.getElementById('eighth-riddle').style.display = 'block'
}

function disapear_button8() {
  document.getElementById('eighth-riddle').style.display = 'none'
  document.getElementById('dont-click-me').style.display = 'block'
}

function function2() {
  riddle2 = document.getElementById('answer-2').value
  if (riddle2 === 'Age' || riddle2 === 'age') {
    document.getElementById('paragraph-2').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph-2').innerHTML = 'Incorrect'
  }
}
function function3() {
  riddle3 = document.getElementById('answer-3').value
  if (riddle3 === 'A sponge' || riddle3 === 'a sponge' || riddle3 === 'sponge' || riddle3 === 'Sponge') {
    document.getElementById('paragraph-3').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph-3').innerHTML = 'Incorrect'
  }
}
function function4() {
  riddle4 = document.getElementById('answer-4').value
  if (riddle4 === 'Joe Biden' || riddle4 === 'joe biden' || riddle4 === 'joe Biden' || riddle4 === 'Joe biden') {
    document.getElementById('paragraph-4').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph-4').innerHTML = 'Incorrect'
  }
}
function function5() {
  riddle5 = document.getElementById('answer-5').value
  if (riddle5 === 'All of them' || riddle5 === 'all of them' || riddle5 === 'all months' || riddle5 === 'All months' || riddle5 === 'every month' || riddle5 === 'Every month' || riddle5 === 'all months have 28 days' || riddle5 === 'All months have 28 days' || riddle5 === 'Every month has 28 days' || riddle5 === 'every month has 28 days') {
    document.getElementById('paragraph-5').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph-5').innerHTML = 'Incorrect'
  }
}
function function6() {
  riddle6 = document.getElementById('answer-6').value
  if (riddle6 === 'A towel' || riddle6 === 'a towel' || riddle6 === 'towel' || riddle6 === 'Towel') {
    document.getElementById('paragraph-6').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph-6').innerHTML = 'Incorrect'
  }
}
function function7() {
  riddle7 = document.getElementById('answer-7').value
  if (riddle7 === 'A barber' || riddle7 === 'a barber' || riddle7 === 'Barber' || riddle7 === 'barber') {
    document.getElementById('paragraph-7').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph-7').innerHTML = 'Incorrect'
  }
}
function function8() {
  riddle8 = document.getElementById('answer-8').value
  if (riddle8 === 'An Echo' || riddle8 === 'an echo' || riddle8 === 'An echo' || riddle8 === 'an Echo' || riddle8 === 'echo' || riddle8 === 'Echo') {
    document.getElementById('paragraph-8').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph-8').innerHTML = 'Incorrect'
  }
}

const myAge = 16
let answer = 0

function donotclickme() {
  while (myAge != answer) {
    answer = prompt('guess my age')
    if (answer == myAge) {
      alert('You got it right!')
    } else if (answer < myAge) {
      alert('You guessed to small, please try again')
    } else if (answer > myAge) {
      alert('you guessed to big, pease try again')
    } else {
      alert('invalid answer, please try again')
    }
  }
}
