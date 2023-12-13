def freq_seq(s, sep):
    return sep.join([str(s.count(t)) for t in s])


print(freq_seq('hello world', '-'))
print(freq_seq('19999999',    ':'))
print(freq_seq('^^^**$',      'x'))
