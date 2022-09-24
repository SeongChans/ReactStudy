function increase(number, callback) {
    setTimeout(() => {
        const result = number + 1;
        if (callback) {
            callback(result);
        }
    },1000)
}

increase(0, result => {
    console.log(result);
});

//콜백함수를 중첩하여 구현할 수 있습니다.
console.timeLog('작업시작');
increase(0, result => {
    console.log(result);
    increase(result, result => {
        console.log(result);
        increase(result, result => {
            console.log(result);
            console.log('작업완료');//콜백지옥
        });
    });
});
