const product = [{
    Image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    Name: 'Athletic Cotton Socks - 6 Pairs',
    rating: {
        stars: 4.5,
        count: 87
    },
    Price: 12.99,
    Description: 'Comfortable and durable athletic socks made from high-quality cotton. Perfect for sports and everyday wear.',
},
{
  Image:'images/products/intermediate-composite-basketball.jpg',
  Name: 'Intermediate Composite Basketball',
    rating: {
        stars: 4.7,
        count: 120
    },  
    Price: 29.99,
    Description: 'High-performance composite basketball designed for intermediate players. Offers excellent grip and durability on the court.',  
},
{
    Image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    Name: 'Adults Plain Cotton T-Shirt - 2 Pack (Teal)',
    rating: {
        stars: 4.3,
        count: 65
    },
    Price: 19.99,
    Description: 'Soft and breathable cotton t-shirts in a stylish teal color. Perfect for casual wear or layering.',

}];


let productsHTML = '';

products.forEach(product => {
    productsHTML += `
        <div class="product-container">
                    <div class="product-image-container">
                        <img class="product-image"
                        src="${product.Image}">
                    </div>

                    <div class="product-name limit-text-to-2-lines">
                        ${product.Name}
                    </div>

                    <div class="product-rating-container">
                        <img class="product-rating-${product.rating.stars * 10}.png">
                        <div class="product-rating-count link-primary">
                        ${product.rating.count} 
                        </div>
                    </div>

                    <div class="product-price">
                        $${product.Price.toFixed(2)}  
                    </div>

                    <div class="product-quantity-container">
                        <select>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        </select>
                    </div>

                    <div class="product-spacer"></div>

                    <div class="added-to-cart">
                        <img src="images/icons/checkmark.png">
                        Added
                    </div>

                    <button class="add-to-cart-button button-primary">
                        Add to Cart
                    </button>
                    </div>
    
    `;
    

});

console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML = productsHTML;