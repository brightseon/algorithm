function bouncingBall(h, bounce, window) {
    if (0 > bounce || bounce >= 1 || h < 0 || h < window) return -1;

    let count = 0,
        height = h;
    while (height > window) {
        ++count;
        height = height * bounce;
        ++count;
    }

    return count - 1;
}

// -------------------------------------------------------------------
// function bouncingBall(h,  bounce,  window) {
//     if( h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1;
//     let seen = 0;

//     while(h > window){
//       seen += 1
//       h *= bounce
//       if(h > window) seen += 1
//     }

//     return seen;
//   }

console.log(bouncingBall(3, 0.66, 1.5));
console.log(bouncingBall(3, 1, 1.5));
console.log(bouncingBall(30.0, 0.66, 1.5));
