// 定数numを０から10の整数の中からランダムに選択する
const num = Math.floor( Math.random() * 11 ) ;
// 選ばれた定数numを表示する
console.log('数値(引数)は'+num+'です') ;
// numを２乗を出力するsquaredの宣言
const squared = (num) => {
    return(num*num);
}
// numの２乗の表示
console.log('2乗は'+squared(num)+'です');