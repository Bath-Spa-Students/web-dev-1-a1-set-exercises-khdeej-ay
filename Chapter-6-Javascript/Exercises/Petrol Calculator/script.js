// function that calculates total cost of petrol
function calculateTotal() {

    // getElementById fetches the value of the petrol per liter input, while parseFloat converts the input to float
    var costOfPetrol = parseFloat(document.getElementById('costOfPetrol').value);

    // getElementById fetches the value of the number of liters input, while parseFloat converts the input to float
    var liters = parseFloat(document.getElementById('liters').value);

    // calculates the total cost of petrol by multiplying the cost of petrol per liter with the number of liters purchased
    // the .toFixed(2) method ensures only 2 decimal places are displayed
    var total = (costOfPetrol * liters).toFixed(2);

    // gets the total element and displays the total cost of petrol purchased
    document.getElementById('total').textContent = "Total cost of petrol: $" + total;
}