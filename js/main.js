//task#1
const line_1 = document.getElementById("string-3");
console.log(line_1.innerText);
const line_2 = document.getElementById("string-5");
console.log(line_2.innerText);
const line_3 = document.getElementById("string-2");
console.log(line_3.innerText);
const line_4 = document.getElementById("string-4");
console.log(line_4.innerText);
const line_5 = document.getElementById("string-1");
console.log(line_5.innerText);


//task#2
const elements = document.getElementsByClassName("element")
elements[0].style.color = "red"
elements[1].style.color = "red"
elements[2].style.color = "red"
elements[3].style.color = "green"
elements[4].style.color = "green"
elements[5].style.color = "green"

//task#3
const container = document.getElementById("container")
const box = []

for (let i = 0; i < 5; i++) {
    const myDiv = document.createElement("div")
    myDiv.className = "element"
    myDiv.textContent = "Element"
    switch (i) {
        case 0: myDiv.innerHTML += `<span style="color: green"> ${i}</span>`
            break;
        case 1: myDiv.innerHTML += `<span style="color: red"> ${i}</span>`
            break;
        case 2: myDiv.innerHTML += `<span style="color: greenyellow"> ${i}</span>`
            break;
        case 3: myDiv.innerHTML += `<span style="color: blue"> ${i}</span>`
            break;
        default: myDiv.innerHTML += `<span style="color: black"> ${i}</span>`
            break;
    }

    box.push(myDiv)

}

container.append(...box)