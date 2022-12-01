function evaporator(content, evap_per_day, threshold) {
    let day = 0,
        gas = 100;

    while (gas > threshold) {
        gas = gas * ((100 - evap_per_day) / 100);
        ++day;
    }

    return day;
}

console.log(evaporator(10, 10, 10));
