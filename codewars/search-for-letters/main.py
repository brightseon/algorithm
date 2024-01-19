import re


def change(st):
  str = set(re.sub('[^a-zA-Z]', '', st.lower()))
  letters = '0' * 26

  for s in str:
    idx = ord(s) - 97
    letters = letters[:idx] + '1' + letters[idx + 1:]

  return letters


print(change("a **&  bZ"))
print(change('Abc e  $$  z'))
print(change("!!a$%&RgTT"))
print(change(""))
print(change("abcdefghijklmnopqrstuvwxyz"))
print(change("aaaaaaaaaaa"))
print(change("&%&%/$%$%$%$%GYtf67fg34678hgfdyd"))
