 // HTML要素がロードされるとコンソールに表示
$(window).on('load', function(){
  console.log('loadイベントが発生しました');
});


// スクロールされるとコンソールに表示
$(window).on('scroll', function(){
  console.log('スクロールされました');
});
