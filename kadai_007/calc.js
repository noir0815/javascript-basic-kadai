// 任意の値としてランダムな0～99の間の整数を変数numに代入する
let num = Math.floor(Math.random() * 100);

// 3と5の倍数の時「3と5の倍数です」を出力する
if (num%15==0) {
    console.log('3と5の倍数です'); 
}
// 5の倍数の時「5の倍数です」を出力する
else if (num%5==0) {
    console.log('5の倍数です');
}
// 3の倍数の時「3の倍数です」を出力する
else if(num%3==0) {
    console.log('3の倍数です');
}
// それ以外の時は変数numの値を出力する
else {
    console.log(num);
}

// 確認用
console.log('変数numは'+ num +'でした');