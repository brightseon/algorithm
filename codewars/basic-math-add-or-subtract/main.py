def calculate(s):
    return str(eval(s.replace('plus', '+').replace('minus', '-')))


print(calculate('1plus2plus3plus4'))
print(calculate('1minus2minus3minus4'))
print(calculate('1plus2plus3minus4'))
print(calculate('1plus2minus3plus4minus5'))
