function bouncingBall(h, bounce, window) {
    let count = -1;
    if (0 > bounce || bounce >= 1 || h < 0 || h < window) return count;

    let height = h;
    while (height > window) {
        height *= bounce;
        count += 2;
    }

    return count;
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
