// 配列holidays
 const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

// for文での出力
console.log("for文での出力が開始");
// 変数xの宣言と代入
for (let x = 0; x <= 15 ; x += 1){
    console.log(holidays[x]);
}
console.log("for文での出力が終了");



//while 文での出力
console.log("while文での出力が開始")
// 変数yの宣言と代入
let y = 0;
while( y !== 16 ){
    console.log(holidays[y]);
    y = y + 1;
}
console.log("while文での出力が終了");