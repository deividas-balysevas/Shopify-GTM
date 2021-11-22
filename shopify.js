<script>
    dataLayer.push({
        'event': 'Transaction',
        'order_number': {{ order.order_number }},
        'total_price': {{ order.total_price | money_without_currency }},
        'currency' : {{ currency.iso_code }},
	'customerEmail' : {{ order.email }},
	'customerPhone' : {{ prder.phone }}
    });
</script> 
