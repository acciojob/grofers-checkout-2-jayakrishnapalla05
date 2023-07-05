//your code here
document.addEventListener('DOMContentLoaded', function () {
  // Get all the price elements
  const prices = document.querySelectorAll('[data-ns-test="prices"]');

  // Calculate the total price
  let totalPrice = 0;
  prices.forEach(function (priceElement) {
    totalPrice += parseFloat(priceElement.textContent);
  });

  // Create the row for displaying the total price
  const table = document.getElementById('grocery-list');
  const newRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.setAttribute('colspan', '2');
  totalCell.textContent = 'Total Price: $' + totalPrice.toFixed(2);
  newRow.appendChild(totalCell);
  table.appendChild(newRow);
});