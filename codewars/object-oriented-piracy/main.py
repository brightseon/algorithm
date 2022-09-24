class Ship:
    def __init__(self, draft, crew):
        self.draft = draft
        self.crew = crew

    def is_worth_it(self):
        return self.draft - (1.5 * self.crew) > 20


print(Ship(0, 0).is_worth_it())
print(Ship(15, 20).is_worth_it())
