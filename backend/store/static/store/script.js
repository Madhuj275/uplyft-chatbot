// static/store/script.js
$(document).ready(function() {
    // Fetch products from the API and display them in the dropdown
    $.ajax({
        url: '/api/products/',  // API endpoint to fetch products
        method: 'GET',
        success: function(data) {
            let productSelect = $('#product-select');
            data.forEach(product => {
                productSelect.append(`
                    <option value="${product.id}">${product.name} - $${product.price}</option>
                `);
            });
        },
        error: function(err) {
            console.error('Error fetching products:', err);
        }
    });

    // Handle order form submission via AJAX
    $('#order-form').submit(function(event) {
        event.preventDefault();  // Prevent default form submission

        const productId = $('#product-select').val();
        const quantity = $('#quantity').val();
        const totalAmount = $('#total-amount').val();
        const status = $('#status').val();
        const user = $('#user').val();  // User info, ideally dynamic

        // Check if the product and quantity are selected
        if (!productId || !quantity) {
            alert('Please select a product and quantity');
            return;
        }

        // Prepare the order data
        const orderData = {
            user: user,  // User ID or username
            total_amount: totalAmount,  // Total price
            status: status,
            items: [
                {
                    product: productId,  // Product ID
                    quantity: quantity,
                    price: 100.00  // You should use the actual product price dynamically
                }
            ]
        };

        // Send the data to the API endpoint via AJAX
        $.ajax({
            url: '/api/orders/',  // The endpoint for creating orders
            method: 'POST',
            data: JSON.stringify(orderData),
            contentType: 'application/json',
            success: function(response) {
                alert('Order placed successfully!');
                console.log(response);
            },
            error: function(error) {
                console.error('Error placing order:', error);
                alert('Failed to place order.');
            }
        });
    });
});
