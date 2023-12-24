
let count = 0 ;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById("save-El")

function increment() {
    count++
    countEl.textContent = count;
}

function save() {
    console.log(count);
    saveEl.textContent += count +" - ";
    count = 0 
    countEl.textContent = count;
}


