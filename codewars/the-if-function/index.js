function _if(bool, func1, func2) {
    bool ? func1() : func2();
}

console.log(
    _if(
        true,
        function () {
            console.log('True');
        },
        function () {
            console.log('false');
        }
    )
);
