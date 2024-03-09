class Cube(object):
    # This cube needs help
    # Define a constructor which takes one integer, or handles no args
    def __init__(self, side=0) -> None:
        self.__side = abs(side or 0)

    def get_side(self):
        """Return the side of the Cube"""
        return self.__side

    def set_side(self, new_side):
        """Set the value of the Cube's side."""
        self.__side = abs(new_side)


c = Cube(10)
print(c.get_side())

c = Cube()
print(c.get_side())
