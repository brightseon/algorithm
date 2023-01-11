SCORE = {
  'accounts': 1,
  'finance': 2,
  'canteen': 10,
  'regulation': 3,
  'trading': 6,
  'change': 6,
  'IS': 8,
  'retail': 5,
  'cleaning': 4,
  "pissing about": 25
}


def boredom(staff):
  total = sum([SCORE[s] for s in staff.values()])

  if total >= 100:
    return 'party time!!'

  return 'kill me now' if total <= 80 else 'i can handle this'


print(
  boredom({
    "tim": "change",
    "jim": "accounts",
    "randy": "canteen",
    "sandy": "change",
    "andy": "change",
    "katie": "IS",
    "laura": "change",
    "saajid": "IS",
    "alex": "trading",
    "john": "accounts",
    "mr": "finance"
  }))
print(
  boredom({
    "tim": "IS",
    "jim": "finance",
    "randy": "pissing about",
    "sandy": "cleaning",
    "andy": "cleaning",
    "katie": "cleaning",
    "laura": "pissing about",
    "saajid": "regulation",
    "alex": "regulation",
    "john": "accounts",
    "mr": "canteen"
  }))
print(
  boredom({
    "tim": "accounts",
    "jim": "accounts",
    "randy": "pissing about",
    "sandy": "finance",
    "andy": "change",
    "katie": "IS",
    "laura": "IS",
    "saajid": "canteen",
    "alex": "pissing about",
    "john": "retail",
    "mr": "pissing about"
  }))
