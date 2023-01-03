def uefa_euro_2016(teams, scores):
    text = f'At match {teams[0]} - {teams[1]}, '

    if scores[0] == scores[1]:
        return text + 'teams played draw.'

    return text + (teams[0] if scores[0] > scores[1] else teams[1]) + ' won!'


print(uefa_euro_2016(['Germany', 'Ukraine'], [2, 0]))
print(uefa_euro_2016(['Belgium', 'Italy'], [0, 2]))
print(uefa_euro_2016(['Portugal', 'Iceland'], [1, 1]))
print(uefa_euro_2016(['Albania', 'Switzerland'], [1, 2]))
print(uefa_euro_2016(['Republic of Ireland', 'Sweden'], [0, 0]))
