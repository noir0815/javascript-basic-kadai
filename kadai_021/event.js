// id#textのhtml要素を取得し、定数に代入する
const Txt =document.getElementById('text');
// id#btnのhtml要素を取得し、定数に代入する
const Btn =document.getElementById('btn');
// ボタンがクリックされた2秒後にテキストを変更する
Btn.addEventListener('click',() => {
    setTimeout(() => {
        Txt.textContent='ボタンがクリックされました';
    }, 2000);
});