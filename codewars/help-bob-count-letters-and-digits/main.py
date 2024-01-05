import re


def count_letters_and_digits(s):
    return len(re.sub('[^\w\d]|_|-', '', s))


print(count_letters_and_digits('n!!ice!!123'))
print(count_letters_and_digits('de?=?=tttes!!t'))
print(count_letters_and_digits(''))
print(count_letters_and_digits('!@#$%^&`~.'))
print(count_letters_and_digits('u_n_d_e_r__S_C_O_R_E'))
