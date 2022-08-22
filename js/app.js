
const playerObj = [];


function display(array) {
    const orderList = document.getElementById("order-list");
    const lists = document.createElement("ol");
    for (let i = 0; i < array.length; i++) {

        lists.innerText = "";
        const element = array[i].playerName;
        if (i >= 5) {
            alert("You can select 5 player");
            break;
        }
        // step - 2: Create list
        lists.innerHTML = `<li>${i + 1}. ${element}</li>`
        orderList.appendChild(lists);
    }
}

//step-1: add handler select button 
const btn = document.getElementsByClassName("btn-select");
for (let button of btn) {
    button.addEventListener("click", function (e) {
        this.classList = "disabled";
        const name = e.target.parentNode.parentNode.children[0].innerText;

        const object = {
            playerName: name,
        }

        playerObj.push(object);
        display(playerObj)
    })
};




// Step-5: create a function for inputField value
function inputFieldValue(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputElementValue = inputElement.value;
    const inputElementNumber = parseFloat(inputElementValue);
    return inputElementNumber;
}

// step-6: create a function for setElement value

function setElementText(elementId, value) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    element.innerText = value;
    return elementText;
}


//step-3: calculate per player budget

document.getElementById("calculate-per-budget").addEventListener("click", function () {
    const perPlayerBudget = inputFieldValue("player-value");
    setElementText("total-expenses", perPlayerBudget);
})

//step-4: add handler in calculate total element

document.getElementById("total-calculate").addEventListener("click", function () {
    const managerBudget = inputFieldValue("manager-budget");
    const coathBudget = inputFieldValue("coach-budget");
    const perPlayerValue = inputFieldValue("player-value");

    calculate(managerBudget, coathBudget, perPlayerValue);

})




//step-5: calculate total Amount
function calculate(managerBudget, coathBudget, perPlayerValue) {

    const totalAmount = (perPlayerValue + managerBudget + coathBudget);
    const total = parseFloat(totalAmount);
    //step-6: set value
    setElementText("total-amount", total);
}