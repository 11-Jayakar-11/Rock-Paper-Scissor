let score = JSON.parse(localStorage.getItem('score'))||
  {
   win:0,
   loose:0,
   tie:0
}

function reset(){

  score.win=0;
  score.loose=0;
  score.tie=0;

  localStorage.removeItem('score');

  document.querySelector('.js-moves').innerHTML='';

  document.querySelector('.js-result').innerHTML='';

    document.querySelector('.js-score').innerHTML=`Wins : ${score.win} Looses : ${score.loose} Tie : ${score.tie}`; 
}

function stopButton(){
  insideButton = document.querySelector('.js-autoplay').innerText;
  if(insideButton === 'Auto Play'){
    document.querySelector('.js-autoplay').innerText = 'STOP';
    document.querySelector('.js-autoplay').classList.remove('autoPlay');
    document.querySelector('.js-autoplay').classList.add('stopButton');
    }
  else{
    document.querySelector('.js-autoplay').innerText = 'Auto Play';
    document.querySelector('.js-autoplay').classList.remove('stopButton');
    document.querySelector('.js-autoplay').classList.add('autoPlay');
  }
}

let isAutoPlay = false;
let intervalId;

function autoPlay(){
  if (!isAutoPlay){
  intervalId = setInterval(function (){
    playerMove = computerMove();
    playGame(playerMove);
  },1000)
  isAutoPlay = true;
}else {
  isAutoPlay = false;
  clearInterval(intervalId);
}
}

function playGame(playerMove){
  let computerMove1 = computerMove();
  let result;
  if(playerMove === 'Rock'){
    if(computerMove1 === 'Rock'){
      result = 'It\'s a Tie';
    }
    if(computerMove1 === 'Paper'){
      result = 'You Loose';
    }
    if(computerMove1 === 'Scissor'){
      result = 'You Win';
    }
  }

  else if(playerMove === 'Paper'){
    if(computerMove1 === 'Rock'){
        result = 'You Win';
    }
    if(computerMove1 === 'Paper'){
        result = 'It\'s a Tie';
    }
    if(computerMove1 === 'Scissor'){
        result = 'You Loose';
    }
  }

  else if(playerMove === 'Scissor'){
    if(computerMove1 === 'Scissor'){
        result = 'It\'s a Tie';
    }
    if(computerMove1 === 'Rock'){
        result = 'You Loose';
    }
    if(computerMove1 === 'Paper'){
        result = 'You Win';
    }
  }

  if(result === 'You Win'){
    score.win += 1;
  }

  else if(result === 'You Loose'){
    score.loose += 1;
  }

  else if(result === 'It\'s a Tie'){
    score.tie += 1;
  }

  localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.js-moves').innerHTML=` You <img class='images' src='images/${playerMove}.png'> vs <img class='images' src='images/${computerMove1}.png'>Computer`;

    document.querySelector('.js-result').innerHTML=`${result}`;
  
    document.querySelector('.js-score').innerHTML=`Wins : ${score.win} Looses : ${score.loose} Tie : ${score.tie}`;
}


  function computerMove(){
    const randomNumber = Math.random();
    let computerMove;
    if(randomNumber>=0 && randomNumber<1/3){
      computerMove = 'Rock';
      }
    else if(randomNumber>=1/3 && randomNumber<2/3){
      computerMove = 'Paper';
      }
    else if(randomNumber>=2/3 && randomNumber<3/3){
      computerMove = 'Scissor';
      }
    return computerMove
  }

 
