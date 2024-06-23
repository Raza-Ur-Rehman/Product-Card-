let product = [
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: 7,
  },
  {
    brand: "Xiaomi Redmi Note 13",
    price: "46,299",
    retail_price: "49,999",
    image: "./assest/Image/xiaomi-redmi-note-13-pakistan.webp",
    discount: "7% OFF",
  },
  {
    brand: "Infinix Hot 40 Pro",
    price: "39,599",
    retail_price: "42,999",
    image: "./assest/Image/infinix-hot-40-pro-pakistan.webp",
    discount:"6% OFF",
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "14% OFF",
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "6% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "6% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "6% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "6% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "6% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "6% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "6% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "6% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "6% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "6% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "6% OFF"
  },
];
    let productList = document.querySelector("#product-list");
  for (let keys in product) {
    productList.innerHTML += `
                    <div class="product-box">
                        <a href="#" class="product-link">
                            <div class="img-box">
                                <img src="${product[keys].image}" alt="${product[keys].brand}">
                            </div>
                            <div class="detail-box">
                                <div class="title">${product[keys].brand}</div>
                                <div class="price-box">
                                    <sup>Rs</sup>
                                    ${product[keys].price}
                                </div>
                                <div class="price-diff">
                                    <div class="price-diff-retail">
                                        <sup>Rs</sup>
                                        ${product[keys].retail_price}
                                    </div>
                                    <div class="discount"> ${product[keys].discount} </div>
                                    </div>
                                    
                                    </div>
                                    <div class="buy-now"><a href="">BUY NOW</a></div>
                                    </a>
                    </div>`;
  }

