{% if first_time_accessed %}
<script>
  var ecData = {
    "first_name": "{{ checkout.billing_address.first_name }}",
    "last_name": "{{ checkout.billing_address.last_name }}",
    "home_address": {
      "street": "{{ checkout.billing_address.street }}",
      "city": "{{ checkout.billing_address.city }}",
      "region": "{{ checkout.billing_address.province }}",
      "postal_code": "{{ checkout.billing_address.zip }}",
      "country": "{{ checkout.billing_address.country_code }}"
    }
  }
if("{{ checkout.email }}"){
   ecData.email = "{{ checkout.email }}";
}
if("{{ checkout.billing_address.phone }}"){
   ecData.phone_number = "{{ checkout.billing_address.phone }}";
}
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({'event':'orderComplete', 'orderValue': {{ checkout.total_price | divided_by: 100.0 }}, 'orderId': '{{ order_number }}', 'orderCurrency': '{{ currency }}', 'ecData': ecData});
</script>
{% endif %}
