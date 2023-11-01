import datetime


def time_correct(t):
    if t is None or len(t) == 0:
        return t

    time_chunks = t.split(':')

    if len(time_chunks) < 3 or not t.replace(':', '').isdigit():
        return None

    hours, minutes, seconds = map(int, time_chunks)
    time_delta = datetime.timedelta(
        hours=hours, minutes=minutes, seconds=seconds)
    hours = time_delta.seconds // 3600
    minutes = (time_delta.seconds // 60) % 60
    seconds = time_delta.seconds % 60 % 60

    return f'{hours:02}:{minutes:02}:{seconds:02}'


print(time_correct(None))
print(time_correct(''))

print(time_correct("001122"))
print(time_correct("00;11;22"))
print(time_correct("0a:1c:22"))

print(time_correct("09:10:01"))
print(time_correct("11:70:10"))
print(time_correct("19:99:99"))
print(time_correct("24:01:01"))
print(time_correct("52:01:01"))
