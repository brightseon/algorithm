def find_screen_height(width, ratio):
    w, h = ratio.split(':')

    return f'{width}x{int(width * int(h) / int(w))}'


print(find_screen_height(1024, "4:3"))
print(find_screen_height(1280, "16:9"))
print(find_screen_height(3840, "32:9"))
print(find_screen_height(1600, "4:3"))
print(find_screen_height(1280, "5:4"))
print(find_screen_height(2160, "3:2"))
print(find_screen_height(1920, "16:9"))
print(find_screen_height(5120, "32:9"))
