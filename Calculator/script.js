document.getElementById('trade-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const stockName = document.getElementById('stock-name').value;
    const buyingPrice = parseFloat(document.getElementById('buying-price').value);
    const targetPrice = parseFloat(document.getElementById('target-price').value);
    const stoplossPrice = parseFloat(document.getElementById('stoploss-price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    const maxProfit = (targetPrice - buyingPrice) * quantity;
    const maxLoss = (buyingPrice - stoplossPrice) * quantity;

    document.getElementById('result-stock-name').textContent = stockName;
    document.getElementById('result-buying-price').textContent = buyingPrice.toFixed(2);
    document.getElementById('result-target-price').textContent = targetPrice.toFixed(2);
    document.getElementById('result-stoploss-price').textContent = stoplossPrice.toFixed(2);
    document.getElementById('result-quantity').textContent = quantity;
    document.getElementById('result-max-profit').textContent = maxProfit.toFixed(2);
    document.getElementById('result-max-loss').textContent = maxLoss.toFixed(2);

    document.getElementById('result').classList.remove('hidden');
});
