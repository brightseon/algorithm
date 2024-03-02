def parse_float(string):
    try:
        return float(string)
    except:
        return None


print(parse_float('1.0'))
print(parse_float('a'))
print(parse_float('234.0234'))
