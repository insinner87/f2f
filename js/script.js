// Handle product request form submission
document.getElementById('productRequestForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const productName = document.getElementById('productName').value;
    const quantity = document.getElementById('quantity').value;

    alert(`Product request submitted!\nProduct: ${productName}\nQuantity: ${quantity}`);

    // Clear form fields
    document.getElementById('productRequestForm').reset();
});

// Handle dealership application form submission
document.getElementById('dealerApplicationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const farmerName = document.getElementById('farmerName').value;
    const farmLocation = document.getElementById('farmLocation').value;

    alert(`Application submitted!\nFarmer: ${farmerName}\nLocation: ${farmLocation}`);

    // Clear form fields
    document.getElementById('dealerApplicationForm').reset();
});
