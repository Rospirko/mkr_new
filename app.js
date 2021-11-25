let board = document.getElementById('boardInner');
let numContainer = document.getElementById('numberContainer');
let letterContainer = document.getElementById('letterContainer');
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I',"J"];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const renderLabels = () => {
  letters.forEach((x,i)=>{
    let el = document.createElement('DIV');
    let el2 = document.createElement('DIV');
    el.innerText = x;
    el.className = 'label';
    el2.innerText = numbers[i];
    el2.className = 'label';
    numContainer.appendChild(el2);
    letterContainer.appendChild(el);
  })
}

const renderBoard = () =>{
  renderLabels()
  for (let i = 0; i < letters.length; ++i){
    let row = document.createElement('DIV');
    row.className = 'row';
    row.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse';
    for (let j = 0; j < numbers.length; ++j){
      console.log(j);
      let square = document.createElement('DIV');
      square.className = 'square';
      square.style.backgroundColor = j % 2 === 0 ? 'white' : 'white';
      row.appendChild(square);
    }
    board.appendChild(row);
  }
 }

renderBoard();
