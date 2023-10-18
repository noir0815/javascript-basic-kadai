// 現在の年月日を表示する関数todayIsの宣言
const todayIs = () => {
    const now =new Date();  //現在の日付時刻を取得
    const year =now.getFullYear();  //年を取り出す
    const month =now.getMonth()+1;  //月を取り出す
    const day =now.getDate();    //日を取り出す
    console.log('本日は'+year+'年'+month+'月'+day+'日です');
}
// 関数の実行
todayIs();