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
    image: "./assest/Image/tecno-spark-20-pakistan.webp",
    discount: "12% OFF"
  },
  {
    brand: "Samsung Galaxy A04",
    price: "17,500",
    retail_price: "31,500",
    image: "./assest/Image/samsung-galaxy-a05s-pakistan.webp",
    discount: "44% OFF"
  },
  {
    brand: "ZTE Blade A72s",
    price: "19,999",
    retail_price: "26,499",
    image: "./assest/Image/zte-blade-a54-pakistan.webp",
    discount: "25% OFF"
  },
  {
    brand: "Infinix Note 40",
    price: "50,000",
    retail_price: "54,999",
    image: "./assest/Image/infinix-note-40-pakistan.webp",
    discount: '<img src="assest/Image/voucher.svg" alt="">'
  },
  {
    brand: "Infinix GT 20 Pro",
    price: "94,999",
    retail_price: "93,999",
    image: "./assest/Image/infinix-gt-20-pro-pakistan.webp",
    discount: '<img src="assest/Image/voucher.svg" alt="">',
  },
  {
    brand: "Xiaomi Redmi 13C",
    price: "24,299",
    retail_price: "31,999",
    image: "./assest/Image/xiaomi-redmi-13c.webp",
    discount: "24% OFF",
  },
  {
    brand: "Tecno Spark 20 Pro",
    price: "37,499",
    retail_price: "44,999",
    image: "./assest/Image/tecno-spark-20-pakistan-pakistan.webp",
    discount: "17% OFF",
  },
  {
    brand: "Tecno Pova 5 Pro",
    price: "37,799",
    retail_price: "44,999",
    image: "./assest/Image/tecno-pova-5-pro-pakistan.webp",
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

