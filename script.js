function incrementWithQuerySelector(prod) {
    if(prod==1)
    {
    var numbers = document.querySelector("#product1")
    }
    else if(prod==2)
    {
        var numbers = document.querySelector("#product2")
    }
    else if(prod==3)
    {
        var numbers = document.querySelector("#product3")
    }
    var integernum = parseInt(numbers.innerHTML)
    if (integernum < 9) {
        numbers.textContent = integernum + 1;
    }
}

function decrementWithClosest(prod) {
    
    if(prod==1)
    {
        var productnum = document.getElementById("product1");
    }
    else if(prod==2)
    {
        var productnum = document.getElementById("product2");
    }
    else if(prod==3)
    {
        var productnum = document.getElementById("product3");
    }
    var integernum = parseInt(productnum.innerHTML)
    
    if (integernum > 1 && productnum.closest(".number")) {
        productnum.textContent = integernum - 1;
    }
}
// function increment() {
//     var numbers = document.getElementsByClassName("number");
//     var integernum = parseInt(numbers[0].innerHTML)
//     if (integernum < 9) {
//         numbers[0].textContent = integernum + 1;
//     }
// }

// function decrement() {
//     var numbers = document.getElementsByClassName("number");
//     var integernum = parseInt(numbers[0].innerHTML)
//     if (integernum > 1) {
//         numbers[0].textContent = integernum - 1;
//     }
// }

