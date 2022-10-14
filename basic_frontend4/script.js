const fifthElement = document.getElementById("fifth-element")
fifthElement.onclick = () => {
    if(fifthElement.style.backgroundColor == "aqua"){
        fifthElement.style.backgroundColor = "white"
    }
    else{
        fifthElement.style.backgroundColor = "aqua"
    }
}

const sixthElement = document.querySelector("#fifth-element + li");
sixthElement.onclick = () => {
    if(sixthElement.style.backgroundColor == "yellow"){
        sixthElement.style.backgroundColor = "white";
        sixthElement.style.color = "black"
    }
    else{
        sixthElement.style.backgroundColor = "yellow";
        sixthElement.style.color = "blue"
    }
}

const buttons = document.getElementById("buttons")
const cityImage = document.getElementById("changable-city-image")

const addButton = document.createElement("button")
addButton.innerText = 'Додати'
addButton.onclick = () => {
    console.log(cityImage.style.display)
    if(cityImage.style.display != "inline"){
        cityImage.style.display = "inline"
        cityImage.style.width = "500px"
        cityImage.style.height = "300px"
    }
}
const increaseButton = document.createElement("button")
increaseButton.innerText = 'Збільшити'
increaseButton.onclick = () => {
    cityImage.style.height = (cityImage.offsetHeight + 20).toString() + "px"
    cityImage.style.width = (cityImage.offsetWidth + 20).toString() + "px"
}
const reduceButton = document.createElement("button")
reduceButton.innerText = 'Зменшити'
reduceButton.onclick = () => {
    cityImage.style.height = (cityImage.offsetHeight - 20).toString() + "px"
    cityImage.style.width = (cityImage.offsetWidth - 20).toString() + "px"
}
const removeButton = document.createElement("button")
removeButton.innerText = 'Видалити'
removeButton.onclick = () => {
    cityImage.style.display = "none"
}

buttons.appendChild(addButton)
buttons.appendChild(increaseButton)
buttons.appendChild(reduceButton)
buttons.appendChild(removeButton)