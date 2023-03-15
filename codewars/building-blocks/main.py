class Block:

  def __init__(self, size):
    self.width = size[0]
    self.length = size[1]
    self.height = size[2]

  def get_width(self):
    return self.width

  def get_length(self):
    return self.length

  def get_height(self):
    return self.height

  def get_volume(self):
    return self.get_width() * self.get_length() * self.get_height()

  def get_surface_area(self):
    return (self.get_width() * self.get_height()) * 2 + (self.get_width(
    ) * self.get_length()) * 2 + (self.get_height() * self.get_length()) * 2


block1 = Block([2, 2, 2])
print(block1.get_width())
print(block1.get_length())
print(block1.get_height())
print(block1.get_volume())
print(block1.get_surface_area())
