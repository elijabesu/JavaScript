let count = 0;
let countEl = document.getElementById("count-el");
countEl.innerText = count;
// the DOM = Document Object Model
let saveEl = document.getElementById("save-el");

console.log(count);

function increment() {
    count++;
    countEl.innerText = count;
}

function save() {
    saveEl.textContent += " " + count + ";";
    count = 0;
    countEl.innerText = "0";
}