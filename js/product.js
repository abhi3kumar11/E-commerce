//nav bar
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

//creating random data 

function generateProduct(id) {
  const categories = [
    'Electronics',
    'Clothing',
    'Books',
    'Home',
    'Beauty',
    'Sports',
    'Toys',
    'Food',
    'Garden',
    'Music',
  ];
  const descriptions = [
    'High-quality product for your needs.',
    'Comfortable item for everyday use.',
    'Bestselling item by famous brand.',
    'Perfect addition to your home decor.',
    'Enhance your beauty with this product.',
    'Great for your favorite sports activity.',
    'Fun and entertaining for all ages.',
    'Delicious and nutritious food item.',
    'Make your garden beautiful with this product.',
    'Enjoy your favorite tunes with this product.',
  ];

  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const randomDescription =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  return {
    id: id,
    name: `Product ${id}`,
    category: randomCategory,
    price: Math.floor(Math.random() * 491) + 10, // Random price between 10 and 500
    image: './images/laptop.jpg',
    description: randomDescription,
  };
}

// Generate 51 products
const productsData = [];
for (let i = 1; i <= 51; i++) {
  productsData.push(generateProduct(i));
}

// console.log(productsData);

// Function to filter products based on category
function filterProducts(category) {
  if (category === 'All') {
    displayProducts(productsData);
  } else {
    const filteredProducts = productsData.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts);
  }
}
function displayProducts(products) {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';

  products.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>Description: ${product.description}</p>
          <p>Price: ${product.price}</p>
          <p>category: ${product.category} </p>
          <button class='cartBttn' onclick="addToCart(${product.id})">Add to Cart</button>
        `;

    productsContainer.appendChild(productElement);
  });
}

// Call the displayProducts function to display products
displayProducts(productsData);

// Function to add a product to the cart
function addToCart(productId) {
  const product = productsData.find((p) => p.id === productId);
  if (product) {
    cartItems.push(product);
    document.getElementById('cart-count').textContent = cartItems.length;
    displaySelectedItems();
    displayTotalPrice();
  }
}

// Function to display selected items
function displaySelectedItems() {
  const selectedItemsList = document.getElementById('selected-items-list');

  if (cartItems.length === 0) {
    selectedItemsList.innerHTML = '<p>No items selected</p>';
    return;
  }

  let itemsHTML = '';
  cartItems.forEach((item) => {
    itemsHTML += `
          <div class="selected-item">
            <div class="addedProduct">
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
            <span class="item-price">$${item.price}</span>
            </div>
            <button class="delete-button" onclick="deleteItem(${cartItems.indexOf(
              item
            )})">Delete</button>
          </div>`;
  });

  selectedItemsList.innerHTML = itemsHTML;
}

// Function to delete an item from the cart
function deleteItem(index) {
  cartItems.splice(index, 1);
  displaySelectedItems();
  displayTotalPrice();
  document.getElementById('cart-count').textContent = cartItems.length;
}

// Function to calculate and display total price
function displayTotalPrice() {
  const totalPriceContainer = document.getElementById('total-price');
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  totalPriceContainer.textContent = 'Total Price: $' + totalPrice.toFixed(2);
}

// Call the function to display products
displayProducts(productsData);
