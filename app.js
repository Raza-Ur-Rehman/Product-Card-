let product = [
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: '<img src="assest/Image/voucher.svg" alt="">',
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
    discount:'<img src="assest/Image/voucher.svg" alt="">',
  },
  {
    brand: "Itel S23 4G",
    price: "18,999",
    retail_price: "21,999",
    image: "./assest/Image/itel-s23-4g-pakistan.webp",
    discount: "14% OFF",
  },
  {
    brand: "Infinix Smart 7 HD",
    price: "17,999",
    retail_price: "18,999",
    image: "./assest/Image/infinix-smart-7-hd-pakistan.webp",
    discount: '<img src="assest/Image/voucher.svg" alt="">'
  },
  {
    brand: "Tecno Spark 20",
    price: "26,499",
    retail_price: "29,999",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "12% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "44% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "25% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: '<img src="assest/Image/voucher.svg" alt="">'
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "11% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "33% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: '<img src="assest/Image/voucher.svg" alt="">'
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "24% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: "30% OFF"
  },
  {
    brand: "Infinix Hot 40i",
    price: "27,099",
    retail_price: "28,499",
    image: "./assest/Image/infinix-hot-40i-pakistan.webp",
    discount: '<img src="./assest/Image/voucher.svg" alt="">'
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
                                    <div class="discount">${product[keys].discount}</div>
                                    </div>
                                    
                                    </div>
                                    <div class="buy-now"><a href="">BUY NOW</a></div>
                                    </a>
                    </div>`;
  }

