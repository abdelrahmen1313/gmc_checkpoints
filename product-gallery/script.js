 // Product data
        const products = [
            {
                id: 1,
                title: "Wireless Headphones",
                description: "Premium noise-cancelling wireless headphones with exceptional sound quality.",
                price: "$199.99",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            },
            {
                id: 2,
                title: "Smart Watch",
                description: "Feature-rich smartwatch with health monitoring and long battery life.",
                price: "$249.99",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            },
            {
                id: 3,
                title: "Laptop Pro",
                description: "High-performance laptop with stunning display and all-day battery.",
                price: "$1299.99",
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            },
            {
                id: 4,
                title: "Camera DSLR",
                description: "Professional DSLR camera with 4K video and advanced autofocus.",
                price: "$899.99",
                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            },
            {
                id: 5,
                title: "Gaming Console",
                description: "Next-gen gaming console with immersive graphics and exclusive titles.",
                price: "$499.99",
                image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            },
            {
                id: 6,
                title: "Fitness Tracker",
                description: "Advanced fitness tracker with heart rate monitoring and GPS.",
                price: "$79.99",
                image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            }
        ];

        // DOM elements
        const gallery = document.getElementById('productGallery');
        const themeToggle = document.getElementById('themeToggle');
        const productModal = document.getElementById('productModal');
        const closeModal = document.getElementById('closeModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalPrice = document.getElementById('modalPrice');
        const modalBuyBtn = document.getElementById('modalBuyBtn');
        const modalCloseBtn = document.getElementById('modalCloseBtn');

        // Initialize the gallery
        function initGallery() {
            products.forEach((product, index) => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.style.animationDelay = `${index * 0.1}s`;
                
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">${product.price}</div>
                        <div class="product-actions">
                            <button class="btn btn-primary" data-id="${product.id}">View Details</button>
                            <button class="btn btn-outline" data-id="${product.id}">Add to Cart</button>
                        </div>
                    </div>
                `;
                
                gallery.appendChild(card);
            });
            
            // Add event listeners to buttons
            document.querySelectorAll('.btn-primary').forEach(btn => {
                if (btn.textContent === 'View Details') {
                    btn.addEventListener('click', () => openModal(parseInt(btn.getAttribute('data-id'))));
                }
            });
            
            document.querySelectorAll('.btn-outline').forEach(btn => {
                if (btn.textContent === 'Add to Cart') {
                    btn.addEventListener('click', () => addToCart(parseInt(btn.getAttribute('data-id'))));
                }
            });
        }

        // Theme toggle functionality
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Save theme preference to localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
        });

        // Check for saved theme preference
        function checkThemePreference() {
            const isDarkMode = localStorage.getItem('darkMode') === 'true';
            if (isDarkMode) {
                document.body.classList.add('dark-mode');
            }
        }

        // Modal functionality
        function openModal(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                modalImage.src = product.image;
                modalImage.alt = product.title;
                modalTitle.textContent = product.title;
                modalDescription.textContent = product.description;
                modalPrice.textContent = product.price;
                
                modalBuyBtn.setAttribute('data-id', productId);
                productModal.classList.add('active');
                
                // Prevent body scrolling when modal is open
                document.body.style.overflow = 'hidden';
            }
        }

        function closeModalFunc() {
            productModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Add to cart functionality
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                // Create a temporary notification
                const notification = document.createElement('div');
                notification.textContent = `${product.title} added to cart!`;
                notification.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background-color: var(--primary-color);
                    color: white;
                    padding: 12px 20px;
                    border-radius: 6px;
                    box-shadow: var(--shadow);
                    z-index: 1001;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.3s ease;
                `;
                
                document.body.appendChild(notification);
                
                // Animate in
                setTimeout(() => {
                    notification.style.opacity = '1';
                    notification.style.transform = 'translateY(0)';
                }, 10);
                
                // Animate out and remove
                setTimeout(() => {
                    notification.style.opacity = '0';
                    notification.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 300);
                }, 3000);
            }
        }

        // Event listeners for modal
        closeModal.addEventListener('click', closeModalFunc);
        modalCloseBtn.addEventListener('click', closeModalFunc);
        modalBuyBtn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
            closeModalFunc();
        });

        // Close modal when clicking outside content
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) {
                closeModalFunc();
            }
        });

        // Initialize the application
        function init() {
            checkThemePreference();
            initGallery();
        }

        // Start the app
        init();