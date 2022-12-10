def nbMonths(start_price_old, start_price_new, saving_per_month, percent_loss_by_month):
    old_price = start_price_old
    new_price = start_price_new
    percent = percent_loss_by_month
    month = 0

    while old_price + (saving_per_month * month) < new_price:
        month += 1

        if month % 2 == 0:
            percent += 0.5

        p = 1 - (percent / 100)
        old_price *= p
        new_price *= p

    return [month, round(old_price + (saving_per_month * month) - new_price)]


print(nbMonths(2000, 8000, 1000, 1.5))
print(nbMonths(12000, 8000, 1000, 1.5))
