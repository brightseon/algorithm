def scrolling_text(text):
  return [(text[i:] + text[0:i]).upper() for i in range(len(text))]


print(scrolling_text("abc"))