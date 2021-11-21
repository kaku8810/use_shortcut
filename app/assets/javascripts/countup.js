var msc = 0;
var sec = 0;
var min = 0;

var timer;
var startTime, clearTime;

//　スタート
$(document).on('click', '.btn', function(){
  if ($('.key').text() == 'クリックしてスタート！'){
    timer = setInterval(countup, 10);
    startTime = Date.now();
  }
}); 

// ストップ
$(document).keydown(function(event){
  if ($('.key').hasClass('lastkey')){
    var id = $('.main').attr('id'); 
    if (id == 'text_mac_practice' || id == 'text_mac_test'){
      if (event.key == 'k' && event.ctrlKey){
        clearInterval(timer);
        clearTime = Math.round((Date.now() - startTime) / 1000);
      }
    }
    else if (id == 'text_win_practice' || id == 'text_win_test'){
      if (event.key == 'p' && event.ctrlKey){
        clearInterval(timer);
        clearTime = Math.round((Date.now() - startTime) / 1000);
      }
    }
    else if (id == 'vscode_mac_practice' || id == 'vscode_mac_test'){
      if (event.key == 's' && event.metaKey){
        clearInterval(timer);
        clearTime = Math.round((Date.now() - startTime) / 1000);
      }
    }
    else if (id == 'vscode_win_practice' || id == 'vscode_win_test'){
      if (event.key == 's' && event.ctrlKey){
        clearInterval(timer);
        clearTime = Math.round((Date.now() - startTime) / 1000);
      }1
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



$(document).on('click', '.save-time', function(){
  saveTime();
}); 

// Ajaxリクエスト

// csrfトークンを設定
function set_csrftoken() {
  $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
      if (!options.crossDomain) {
          const token = $('meta[name="csrf-token"]').attr('content');
          if (token) {
              return jqXHR.setRequestHeader('X-CSRF-Token', token);
          }
      }
  });
}

function saveTime(){
  // ajax通信条件にCSRFトークンを入れる
  set_csrftoken()

  $.ajax({
    type: 'POST', // リクエストのタイプ
    url: '/timeatacks', // リクエストを送信するURL
    data: {
      timeatack: { time: clearTime }
    }, // サーバーに送信するデータ
    dataType: 'json' // サーバーから返却される型
  })
  .done(function(){
    window.location.href = '/timeatacks'
  })
}

