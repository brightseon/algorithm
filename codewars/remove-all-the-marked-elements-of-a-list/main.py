class List:
    def remove_(self, integer_list, values_list):
        return list(filter(lambda l: l not in values_list, integer_list))


l = List()

integer_list = [1, 1, 2, 3, 1, 2, 3, 4]
values_list = [1, 3]
print(l.remove_(integer_list, values_list))

integer_list = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8]
values_list = [1, 3, 4, 2]
print(l.remove_(integer_list, values_list))

integer_list = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3]
values_list = [2, 4, 3]
print(l.remove_(integer_list, values_list))
