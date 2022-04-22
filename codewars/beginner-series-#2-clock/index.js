const past = (h, m, s) => {
    const mil = 1000;
    const sixty = 60;

    return h * Math.pow(sixty, 2) * mil + m * sixty * mil + s * mil;
};

// --------------------------------------------------------------------------------
// const past = (h, m, s) => 1000 * (h * 3600 + m * 60 + s);

console.log(past(0, 1, 1));
