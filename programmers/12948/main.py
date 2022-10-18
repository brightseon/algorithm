import re


def solution(phone_number):
    return re.sub('.(?=[0-9]{4})', '*', phone_number)


print(solution('01033334444'))
print(solution('027778888'))
