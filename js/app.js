// get extra cost
function getExtraCost(inputId, price) {
    document.getElementById(inputId).innerText = price;

    // calling calculateTotalPrice
    calculateTotalPrice();
}

// calculate total price
function calculateTotalPrice() {
    const bestPrice = 1299;
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delevery-charge').innerText);
    const totalPrice = bestPrice + memoryCost + storageCost + deliveryCost;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total').innerText = totalPrice;
}
// apply promo code
function applyPromoCode() {
    const getPromoCode = document.getElementById('promo-code').value;
    document.getElementById('promo-code').value = '';
    const total = parseInt(document.getElementById('total').innerText)
    const totalPrice=parseInt(document.getElementById('total-price').innerText);
    if (getPromoCode == 'stevekaku') {
        const savePrice = totalPrice * 0.2;
        const totalPriceApplyPromoCode = totalPrice - savePrice;
        document.getElementById('total').innerText = totalPriceApplyPromoCode;
        document.getElementById('success-msg').style.display='block';
        document.getElementById('error-msg').style.display='none';
    }
    else{
        document.getElementById('error-msg').style.display='block';
        document.getElementById('success-msg').style.display='none';
    }
}

// memory event handler
document.getElementById('memory-8-gb').addEventListener('click', function () {
    getExtraCost('memory-cost', 0)
});
document.getElementById('memory-16-gb').addEventListener('click', function () {
    getExtraCost('memory-cost', 180)
});
// storage event handler
document.getElementById('storage-256-gb').addEventListener('click', function () {
    getExtraCost('storage-cost', 0)
})
document.getElementById('storage-512-gb').addEventListener('click', function () {
    getExtraCost('storage-cost', 100)
})
document.getElementById('storage-1-tb').addEventListener('click', function () {
    getExtraCost('storage-cost', 180)
})
// delivery event handler
document.getElementById('friday-aug-25').addEventListener('click', function () {
    getExtraCost('delevery-charge', 0)
})
document.getElementById('friday-aug-21').addEventListener('click', function () {
    getExtraCost('delevery-charge', 20)
})

// apply promo code
document.getElementById('promo-code-submit').addEventListener('click', function () {
    applyPromoCode();
})
