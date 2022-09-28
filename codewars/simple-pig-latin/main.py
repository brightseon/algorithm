from re import sub

def pig_it(text):
    return sub('\w+', lambda txt: txt.group()[1:len(txt.group())] + txt.group()[:1] + 'ay', text)

print(pig_it('Pig latin is cool'))
print(pig_it('This is my string'))
print(pig_it('Hello world !'))
