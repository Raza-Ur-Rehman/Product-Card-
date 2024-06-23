let productList = document.querySelector("product-list");


let product = [
    {
        "brand" : "Infinix Hot 40i",
        "price" : "27,099",
        "retail_price" : "28,499",
        "image" : "./assest/Image/infinix-hot-40i-pakistan.webp",
        "discount" :
    }

]
for(let key in product) {
    productList.innerHTML = 
    `<div class="product-box">
                        <a href="#">
                            <div class="img-box">
                                <img src="${}" alt="">
                            </div>
                            <div class="detail-box">
                                <div class="title">${Object.keys(product)}</div>
                                <div class="price-box">
                                    <sup>Rs</sup>
                                    27,099
                                </div>
                                <div class="price-diff">
                                    <div class="price-diff-retail">
                                        <sup>Rs</sup>
                                        28,499
                                    </div>
                                    <div class="discount">
                                        <img src="assest/Image/voucher.svg" height="30" width="57" alt="voucher">
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>`

}

























