def ordered_count(inp):
    dic = {}

    for i in list(inp):
        try:
            dic[i] += 1
        except:
            dic[i] = 1

    return [(d, dic[d]) for d in list(dic)]


print(ordered_count('abracadabra'))
print(ordered_count('Code Wars'))
