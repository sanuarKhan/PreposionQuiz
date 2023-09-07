// all guesses
const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');
const guess4 = document.getElementById('guess-4');
const guess5 = document.getElementById('guess-5');
const guess6 = document.getElementById('guess-6');

// images 
const imgS = document.getElementById('imgS');
const imgZ = document.getElementsByClassName('imgZ');

// all answers


const answer1 = document.getElementById('showAnswer1');
const answer2 = document.getElementById('showAnswer2');
const answer3 = document.getElementById('showAnswer3');
const answer4 = document.getElementById('showAnswer4');
const answer5 = document.getElementById('showAnswer5');
const answer6 = document.getElementById('showAnswer6');

const clue = document.getElementById('clue');

function showAnswer(index){
  index.addEventListener('click', ()=>{
    console.log("o i am working")
    if(index === guess1){
      answer1.style.display = 'flex'
      answer2.style.display = 'none'
      answer3.style.display = 'none'
      answer4.style.display = 'none'
      answer5.style.display = 'none'
      answer6.style.display = 'none'
      clue.style.display = 'none'
      
    }
    else if(index === guess2){
      imgS.style.cssText = `right:-265px;`
      answer2.style.display = 'flex'
      answer1.style.display = 'none'
      answer3.style.display = 'none'
      answer4.style.display = 'none'
      answer5.style.display = 'none'
      answer6.style.display = 'none'
      clue.style.display = 'none'
      

    }
    else if(index === guess3){
      answer3.style.cssText = `display:flex; background: url('./images/money.jpg'); color:green;`
      answer1.style.display = 'none'
      answer2.style.display = 'none'
      answer4.style.display = 'none'
      answer5.style.display = 'none'
      answer6.style.display = 'none'
      clue.style.display = 'none'
    }
    else if( index === guess4){
      answer4.style.display = 'flex'
      answer1.style.display = 'none'
      answer2.style.display = 'none'
      answer3.style.display = 'none'
      answer5.style.display = 'none'
      answer6.style.display = 'none'
      clue.style.display = 'none'
    }
    else if(index === guess5){
      answer5.style.display = 'flex'
      answer1.style.display = 'none'
      answer2.style.display = 'none'
      answer3.style.display = 'none'
      answer4.style.display = 'none'
      answer6.style.display = 'none'
      clue.style.display = 'none'
    } else{
      answer6.style.display = 'flex'
      answer1.style.display = 'none'
      answer2.style.display = 'none'
      answer3.style.display = 'none'
      answer4.style.display = 'none'
      answer5.style.display = 'none'
      clue.style.display = 'none'
      
    }
    
    // answer1.style.display = 'flex'
    // answer1.style.display = 'flex'
    // answer1.style.display = 'flex'
    // answer1.style.display = 'flex'
    // answer1.style.display = 'flex'
  })
}