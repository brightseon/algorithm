def discover_original_price(discounted_price, sale_percentage):
  return round(discounted_price / (1 - (sale_percentage / 100)), 2)


print(discover_original_price(75, 25))
print(discover_original_price(25, 75))
print(discover_original_price(75.75, 25))
print(discover_original_price(373.85, 11.2))
print(discover_original_price(458.2, 17.13))
