def solution(full_text, search_text):
    return full_text.count(search_text)


print(solution('abcdeb', 'b'))
print(solution('abc', 'b'))
print(solution('abbc', 'bb'))
print(solution('abcdeb', 'b'))
print(solution('abcdeb', 'a'))
print(solution('ccddeeccddeecc', 'cc'))
print(solution('aabb', 'cc'))
print(solution('bbaa', 'a'))
print(solution('abab', 'a'))
print(solution('abcdefdvbhibjkb', 'b'))
print(solution('abccded', 'cc'))
print(solution('abccded', 'd'))
