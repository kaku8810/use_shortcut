var msc = 0;
var sec = 0;
var min = 0;

var timer;

//　スタート
$(window).click(function(){
  if ($('.key').text() == '画面をクリックしてスタート！'){
    timer = setInterval(countup, 10);
  }
}); 

// ストップ
$(window).keydown(function(event){
  if ($('.key').hasClass('lastkey')){
    if (event.key == 'k' && event.ctrlKey){
      clearInterval(timer);
    }
    else if (event.key == 'p' && event.ctrlKey){
      clearInterval(timer);
    }
  }
});

// カウントアップ
function countup(){
  msc += 1;

  if (msc > 99) {
    msc = 0;
    sec +=1
  }

  if (sec > 59) {
    sec = 0;
    min += 1;
  }

  // 0埋め
  msc_number = ('0' + msc).slice(-2);
  sec_number = ('0' + sec).slice(-2);
  min_number = ('0' + min).slice(-2);

  $('#time').html(min_number + ':' + sec_number + ':' + msc_number);
}
