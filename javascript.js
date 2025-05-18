function updateTotal() {
  const productCards = document.querySelectorAll(".product-card");
  let total = 0;

  productCards.forEach((card) => {
    const price = parseFloat(card.dataset.price);
    const quantity = parseInt(card.querySelector(".quantity").textContent);
    total += price * quantity;
  });

  document.getElementById("totalPrice").textContent = total.toFixed(2);
}

// Initial total calculation
updateTotal();

// Event delegation for dynamic actions
document.querySelector(".product-grid").addEventListener("click", function (e) {
  const card = e.target.closest(".product-card");
  if (!card) return;

  const quantityElem = card.querySelector(".quantity");
  let quantity = parseInt(quantityElem.textContent);

  // Handle "+" button
  if (e.target.classList.contains("plus")) {
    quantity++;
    quantityElem.textContent = quantity;
    updateTotal();
  }

  // Handle "−" button
  if (e.target.classList.contains("minus")) {
    if (quantity > 1) {
      quantity--;
      quantityElem.textContent = quantity;
      updateTotal();
    }
  }

  // Handle delete
  if (e.target.classList.contains("delete")) {
    card.remove();
    updateTotal();
  }

  // Handle like button
  if (e.target.classList.contains("like")) {
    e.target.classList.toggle("liked");
    e.target.textContent = e.target.classList.contains("liked") ? "❤️" : "♡";
  }
});
