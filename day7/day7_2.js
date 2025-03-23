//배열 만들기 2

function countCharacter(str, char) {
    return [...str].reduce((count, c) => (c === char ? count + 1 : count), 0);
  }
  
  function solution(l, r) {
    var answer = [];
    for (let i = l; i <= r; i++) {
      var numString = i.toString();
      if (
        numString.length ==
        countCharacter(numString, "0") + countCharacter(numString, "5")
      ) {
        answer.push(i);
      }
    }
    if (answer.length === 0){
      answer.push(-1);
    }
      
    return answer;
  }
  
  