ROUTINE = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5],
           [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]


def solution(answers):
    score = [0, 0, 0]

    for i, a in enumerate(answers):
        if ROUTINE[0][i % len(ROUTINE[0])] == a:
            score[0] = score[0] + 1
        if ROUTINE[1][i % len(ROUTINE[1])] == a:
            score[1] = score[1] + 1
        if ROUTINE[2][i % len(ROUTINE[2])] == a:
            score[2] = score[2] + 1

    max_score = max(*score)

    return list(
        filter(lambda a: a >= 0, [
            i + 1 if s == max_score else -1
            for i, s in zip(range(len(ROUTINE)), score)
        ]))


print(solution([1, 2, 3, 4, 5]))
print(solution([1, 3, 2, 4, 2]))
