def band_name_generator(name):
  return name[0].upper() + (
    name[1:] *
    2) if name[0] == name[-1] else f'The {name[0].upper() + name[1:]}'


print(band_name_generator("knife"))
print(band_name_generator("tart"))
print(band_name_generator("sandles"))
print(band_name_generator("bed"))
print(band_name_generator("qq"))
