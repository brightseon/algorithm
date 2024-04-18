def longest_palindrome(s):
    size = len(s)

    if size < 2:
        return size

    max_length = 1

    for i in range(size - 1):
        str = s[i:i+2]

        if str == str[::-1]:
            max_length = 2
            break

    for l in range(3, size + 1):
        for i in range(size - l + 1):
            j = i + l
            str = s[i:j]

            if str == str[::-1]:
                max_length = l
                break

    return max_length


print(longest_palindrome('a'))
print(longest_palindrome('aa'))
print(longest_palindrome('baa'))
print(longest_palindrome('aab'))
print(longest_palindrome('abcdefghba'))
print(longest_palindrome('baablkj12345432133d'))
