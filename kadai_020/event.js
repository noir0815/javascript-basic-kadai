// textというidを持つhtml要素を取得し、定数に代入する
const Txt =document.getElementById('text');
// btnというidを持つhtml要素を取得し、定数に代入する
const Btn = document.getElementById('btn');
// html要素がクリックされたときに#textを変更する
Btn.addEventListener('click', () =>{
    Txt.textContent ='ボタンがクリックされました';
});
 