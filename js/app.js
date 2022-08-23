
const playerObj = [];

//step-2: create display function 

function display(array) {
    const orderList = document.getElementById("order-list");
    const lists = document.createElement("ol");
    lists.style.marginLeft = '20px';
    lists.style.color = "white";
    for (let i = 0; i < array.length; i++) {

        lists.innerText = "";
        const element = array[i].playerName;
        if (i >= 5) {
            alert("You can select 5 player");
            break;
        }
        // step - 3: Create list
        document.getElementById("player-count").innerText = i + 1;
        lists.innerHTML = `<li class="font-bold">${i + 1}. ${element}</li>`
        orderList.appendChild(lists);
        budgetCalculate(i)
    }
}

//step-1: add handler select button 
const btn = document.getElementsByClassName("btn-select");
for (let button of btn) {
    button.addEventListener("click", function (e) {
        const name = e.target.parentNode.parentNode.children[0].innerText;
        this.setAttribute("disabled", "");
        const object = {
            playerName: name,
        }

        playerObj.push(object);
        display(playerObj);
    })
};




// Step-4: create a function for inputField value
function inputFieldValue(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputElementValue = inputElement.value;
    const inputElementNumber = parseFloat(inputElementValue);
    return inputElementNumber;
}

// step-5: create a function for setElement value

function setElementText(elementId, value) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    element.innerText = value;
    return elementText;
}


//step-6: calculate player budget

function budgetCalculate(index) {
    document.getElementById("calculate-per-budget").addEventListener("click", function () {
        const perPlayerBudget = inputFieldValue("player-value");
        const player = index + 1;
        const totalBudget = perPlayerBudget * player;
        setElementText("total-expenses", totalBudget);


        //step-7: add handler in calculate total element

        document.getElementById("total-calculate").addEventListener("click", function () {
            const managerBudget = inputFieldValue("manager-budget");
            const coathBudget = inputFieldValue("coach-budget");


            calculate(managerBudget, coathBudget, totalBudget);

        })

    })
}


//step-8: calculate total Amount
function calculate(managerBudget, coathBudget, totalBudget) {

    const totalAmount = totalBudget + managerBudget + coathBudget;
    const totalAmountFixed = totalAmount.toFixed(2);
    const totalAmountNumber = parseFloat(totalAmountFixed)
    console.log(totalAmountNumber)
    //step-6: set value
    setElementText("total-amount", totalAmountNumber);
}