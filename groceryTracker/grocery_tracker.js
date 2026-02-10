let total;

function calculateTotalPurchase() {
    let product_1 = parseFloat(document.getElementById('grocery1').value);
    let product_2 = parseFloat(document.getElementById('grocery2').value);
    let product_3 = parseFloat(document.getElementById('grocery1').value);
    
    total = product_1 + product_2 + product_3;
    
    document.getElementById('result').innerText = `The total amount is: $${total}.`;
}