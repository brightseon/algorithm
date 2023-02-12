def meeting(rooms):
  try:
    return rooms.index('O')
  except:
    return 'None available!'


print(meeting(['X', 'O', 'X']))
print(meeting(['O', 'X', 'X', 'X', 'X']))
print(meeting(['X', 'X', 'O', 'X', 'X']))
print(meeting(['X']))