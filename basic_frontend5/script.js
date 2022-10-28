const table = document.querySelector("table");
const form = document.querySelector("#wrapper form");
form.addEventListener('submit', onSubmit);

const elements = [
    {id: "name", regex: /^[a-zA-ZА-Яа-яґҐєЄіІїЇ]+ [A-ZА-ЯҐЄІЇ]\.[A-ZА-ЯҐЄІЇ]\.$/, field: "ПІБ"},
    {id: "id-card", regex: /^[a-zA-ZА-Яа-яґҐєЄіІїЇ]{2} №[0-9]{6}$/, field: "ID-card"},
    {id: "faculty", regex: /^[a-zA-ZА-Яа-яґҐєЄіІїЇ]+$/, field: "Факультет"},
    {id: "birth-date", regex: /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/, field: "Дата народження"},
    {id: "address", regex: /^м\. [a-zA-ZА-Яа-яґҐєЄіІїЇ]+$/, field: "Адреса"},
]

elements.forEach(element => setRandomColorOnHover(element.id))

function onSubmit(event) {
    event.preventDefault();
    elements.forEach(element => checkElementWithRegexById(element.id, element.regex))
    const isCorrectInput = elements.every(element => checkElementWithRegexById(element.id, element.regex));
    if(isCorrectInput){
        showOutput(elements);
    }
    else{
        hideOutput();
    }
}

function checkElementWithRegexById(id, regex){
    const value = document.getElementById(id).value;
    if(regex.test(value)){
        markCorrect(id);
        return true;
    }
    else{
        markError(id);
        return false;
    }
}

function markError(id){
    const element = document.getElementById(id);
    element.style.border = '1px solid red';
}

function markCorrect(id){
    const element = document.getElementById(id);
    element.style.border = '1px solid lightgray';
}

function showOutput(){
    const output = document.getElementById("output");
    output.style.display = "block";
    elements.forEach(element => {
        const elementValue = document.getElementById(element.id).value;
        const targetElement = document.getElementById("output-" + element.id);
        targetElement.innerHTML = `<b>${element.field}:</b> ${elementValue}`;
    })
}

function hideOutput(){
    const output = document.getElementById("output");
    output.style.display = "none";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColorOnHover(id, keepRandomColor=false){
    const element = document.getElementById(id);
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = getRandomColor();
    });
    if(!keepRandomColor){
        element.addEventListener("mouseout", () => {
            element.style.backgroundColor = "transparent";
        });
    }
}

const variant = 4;
const variantCellId = `cell-${variant}`;

for (let row = 0; row < 6; row++) {
    const rowElement = document.createElement('tr');
    for (let cell = 0; cell < 6; cell++) {
        const index = (cell + 1 + (row * 6)).toString();
        const dataElement = document.createElement('td');
        dataElement.innerHTML = index;
        dataElement.id = `cell-${index}`;
        rowElement.appendChild(dataElement);
        table.appendChild(rowElement);
    }
}

setRandomColorOnHover(variantCellId, true);

const variantCell = document.getElementById(variantCellId);
variantCell.addEventListener("click", () => {
    variantCell.style.backgroundColor = document.getElementById("color-picker").value;
});
variantCell.addEventListener("dblclick", () => {
    for(let index = 6; index <= 31; index += 5){
        const cell = document.getElementById(`cell-${index}`);
        cell.style.backgroundColor = document.getElementById("color-picker").value;
    }
})