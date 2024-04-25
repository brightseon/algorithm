def word_search(query, seq):
    words = [s for s in seq if query.lower() in s.lower()]

    if len(words) > 0:
        return words

    return ['None']


print(word_search("ab", ["za", "ab", "abc", "zab", "zbc"]))
