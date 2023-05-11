const value = document.getElementById('value');
const bttPlus = document.getElementById('plus');
const bttMinus = document.getElementById('minus');
const bttReset = document.getElementById('reset');

const updateValue= () =>{
    value.innerHTML = count
}

let count = 0;
let intervalId = 0;

bttPlus.addEventListener('mousedown', () =>{
    intervalId = setInterval(() =>{
        count += 1;
        updateValue()
    }, 100);
});
bttMinus.addEventListener('mousedown', () =>{
    intervalId = setInterval(() =>{
        count -= 1;
        updateValue()
    }, 100)
});

document.addEventListener('mouseup', () =>clearInterval(intervalId));

bttReset.addEventListener('click',() =>{
    count = 0
    updateValue()
});