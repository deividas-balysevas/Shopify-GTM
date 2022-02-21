<script>
    dataLayer.push({
        'event': 'Transaction',
        'order_number': {{ order.order_number }},
        'total_price': {{ order.total_price | money_without_currency }},
	'customerEmail' : '{{ order.email }}',
	'customerPhone' : '{{ order.phone }}'
    });
</script> 
