def remove_rotten(bag_of_fruits):
  if bag_of_fruits is None:
    return []

  return [fruit.replace('rotten', '').lower() for fruit in bag_of_fruits]


print(
  remove_rotten([
    "rottenApple", "rottenBanana", "rottenApple", "rottenPineapple",
    "rottenKiwi"
  ]))
print(remove_rotten([]))