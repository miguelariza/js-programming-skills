function performOperation() {
    // Get user input from input fields
    let num1 = document.getElementById('input1').value;
    let num2 = document.getElementById('input2').value;
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        //let result = multiply(num1, num2);
        let result = operations(num1, num2);
        //console.log(result);
        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function operations(a, b) {
    let ops = [];
    ops.push(addition(a, b));
    ops.push(substraction(a, b));
    ops.push(multiply(a, b));
    ops.push(division(a, b));
    console.log(ops);
    return ops;
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    //debugger;
    // Multiply the numbers
    return a * b;
}

function addition(a, b) {
    // Introduce a debugger statement to pause execution
    //debugger;
    // Multiply the numbers
    return a + b;
}

function substraction(a, b) {
    // Introduce a debugger statement to pause execution
    //debugger;
    // Multiply the numbers
    return a - b;
}

function division(a, b) {
    //debugger;
    return a / b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    //resultElement.textContent = `The result is: ${result}`;
    for (res of result) {
        console.log(res);
        resultElement.innerHTML += `<p>The result is ${res}</p>`;
    }
    //resultElement.innerHTML = `<p>The result is ${result}</p>`;
}