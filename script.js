const flowerData = [
    "Rose", "Daisy", "Tulip", "Sunflower", "Lily", "Cherry Blossom", "Hibiscus", "Marigold",
    "Peony", "Lavender", "Orchid", "Carnation", "Bluebell", "Gardenia", "Jasmine", "Magnolia",
    "Begonia", "Camellia", "Pansy", "Zinnia"
  ];
  
  const flowerProducts = document.getElementById("flower-products");
  const cartItems = document.getElementById("cart-items");
  
  // Populate flower list with quantity inputs and buttons
  flowerData.forEach(flower => {
    const li = document.createElement("li");
    li.innerHTML = `
      🌼 ${flower} - $${(Math.random() * 3 + 1).toFixed(2)} 
      <input type="number" min="1" value="1" class="qty-input" id="qty-${flower}" />
      <button onclick="addToCart('${flower}')">Add to Cart</button>
    `;
    flowerProducts.appendChild(li);
  });
  
  function addToCart(flowerName) {
    const qtyInput = document.getElementById(`qty-${flowerName}`);
    const quantity = parseInt(qtyInput.value);
  
    if (quantity <= 0 || isNaN(quantity)) {
      alert("Please enter a valid quantity.");
      return;
    }
  
    const item = document.createElement("li");
    item.textContent = `${quantity} x ${flowerName} `;
  
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = () => item.remove();
  
    item.appendChild(removeBtn);
    cartItems.appendChild(item);
  }
  