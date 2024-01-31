class Dictionary():

  def __init__(self):
    self.dic = {}

  def newentry(self, word, definition):
    self.dic[word] = definition

  def look(self, key):
    try:
      return self.dic[key]
    except:
      return f"Can't find entry for {key}"


d = Dictionary()
d.newentry('Apple', 'A fruit that grows on trees')

print(d.look('Apple'))
print(d.look('Banana'))

d.newentry('Apple', 'A fruit')
print(d.look('Apple'))

d.newentry("Soccer", "A sport")
print(d.look('Soccer'))

d.look("Hi")
d.look('Ball')

d.newentry("soccer", "a sport")
print(d.look('soccer'))