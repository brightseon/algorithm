from re import sub


def cat_mouse(x):
  return 'Caught!' if sub('\.{1,3}', '', x, 1).find('.') == -1 else 'Escaped!'


print(cat_mouse('C....m'))
print(cat_mouse('C..m'))
print(cat_mouse('C.....m'))
print(cat_mouse('C.m'))
print(cat_mouse('m...C'))
print(cat_mouse('mC'))