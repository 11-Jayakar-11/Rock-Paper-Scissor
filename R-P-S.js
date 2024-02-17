let score = {
  win:0,
  loose:0,
  tie:0,
}

function reset(){
  score.win=0;
  score.loose=0;
  score.tie=0;
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
  
  alert(`You choose ${playerMove}. Computer choose ${computerMove1}.${result}!!
Wins : ${score.win} Looses : ${score.loose} Tie : ${score.tie}`);


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
}