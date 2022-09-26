from re import sub

# return masked string
def maskify(cc):
    return sub('.(?=.{4})', '#', cc)

print(maskify(''))
print(maskify('123'))
print(maskify('SF$SDfgsd2eA'))