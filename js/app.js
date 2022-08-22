
//step-1: add handler select button 
const btn = document.getElementsByClassName("btn-select");
for (let button of btn) {
    button.addEventListener("click", function (e) {
        const name = e.target.parentNode.parentNode.children[0].innerText;


        // step-2: Create list
        const orderList = document.getElementById("order-list");

        const lists = document.createElement("ol");
        const list = document.createElement("li");
        list.innerText = name;
        lists.appendChild(list);
        orderList.appendChild(lists);
    })
};


// Step-5: create a function for inputField value
function inputFieldValue(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputElementValue = inputElement.value;
    const inputElementNumber = parseFloat(inputElementValue);
    inputElement.value = "";
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

    //step-5: calculate total Amount

    const totalAmount = (perPlayerValue + managerBudget + coathBudget).toFixed(2);
    const total = parseFloat(totalAmount);
    //step-6: set value
    setElementText("total-amount", total);
})



