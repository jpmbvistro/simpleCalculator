const numDisplay = document.querySelector('#display')
const buttons = document.querySelectorAll('button')
const buttonOperators = document.querySelectorAll('.operator')
Array.from(buttons).forEach(element => element.addEventListener('click', buttonPress))

const operator = 0;
const value = 1;
let lastButton = 0;//boolean above

let prevNum = 0;

//string as current operator
let op = ''

//clearing resets all non-constant variables

function buttonPress(click) {
  //console.log(click.currentTarget);
  const buttonClasses = click.currentTarget.classList
  //console.log(`element ID: ${click.currentTarget.id}`);

  if(buttonClasses.contains('clear')) {
    //console.log("Clear");
    numDisplay.innerText = 0
    lastButton = 0
    prevNum = 0
    lastOperator = ''

  } else if(buttonClasses.contains('value')){
      //console.log("Value Press");
      if(Number(numDisplay.innerText) === 0 || lastButton === 0) {
        console.log("display replace");
        numDisplay.innerText =  click.currentTarget.id

      } else {
        numDisplay.innerText += click.currentTarget.id
      }
      lastButton=value
    } else {
      console.log("operator");
      //understood as an operator
      //run calc then highlight operator
      numDisplay.innerText = calc(Number(numDisplay.innerText)).toPrecision(4)
      prevNum = Number(numDisplay.innerText)
      op = click.currentTarget.id
      lastButton=operator
    }
}


/* calculates the currently defined operator between prevNum and passed in value
will return currentNum if operator is equals or undefined*/
function calc(currentNum){
  switch (op) {
    case '+':
      return prevNum + currentNum
      break;
    case '-':
      return prevNum - currentNum
      break
    case '*':
      return prevNum * currentNum
      break;
    case '/':
      return prevNum / currentNum
      break;
    default:
      return currentNum
  }
}


//Highlights or clears highlighted operator
function opFocus(opID) {

  Array.from(buttonOperators).forEach(element => element.style.boxShadow = none)
  document.querySelector(`#${opID}`).style.boxShadow = '0px 0px 5px 1px red'
}
