def fly_by(lamps, drone):
  return lamps.replace('x', 'o', drone.index('T') + 1)


print(fly_by('xxxxxx', '====T'))
print(fly_by('xxxxxxxxx', '==T'))
print(fly_by('xxxxxxxxxxxxxxx', '=========T'))
