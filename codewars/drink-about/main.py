def people_with_age_drink(age):
    drink = 'whisky'

    if age < 14:
        drink = 'toddy'
    elif age < 18:
        drink = 'coke'
    elif age < 21:
        drink = 'beer'

    return f'drink {drink}'


print(people_with_age_drink(13))
print(people_with_age_drink(17))
print(people_with_age_drink(15))
print(people_with_age_drink(14))
print(people_with_age_drink(20))
print(people_with_age_drink(18))
print(people_with_age_drink(22))
print(people_with_age_drink(21))
