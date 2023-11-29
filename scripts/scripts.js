
  // Cart counter
  let cartCount = 0;

  // Function to update cart counter and show confirmation
  function addToCart() {
    cartCount++;
    updateCartCounter();
    showConfirmation();
  }

  // Function to update the cart counter element
  function updateCartCounter() {
    const cartCounterElement = document.getElementById('cart-counter');
    cartCounterElement.innerText = cartCount;
  }

  // Function to show a confirmation message (you can customize this)
  function showConfirmation() {
    alert('Item added to cart!');
  }
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const basketContainer = document.getElementById('basket-container');

        // Function to update the basket position on scroll
        function updateBasketPosition() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > 50) {
                basketContainer.classList.add('sticky');
            } else {
                basketContainer.classList.remove('sticky');
            }
        }

        // Attach the updateBasketPosition function to the scroll event
        window.addEventListener('scroll', updateBasketPosition);

        // Initial position update
        updateBasketPosition();
