$(window).click(function(){ //Windowがクリックされたら
  var id = $('.main').attr('id'); 
  var element = $('.start').text()
  if (element == '画面をクリックしてスタート'){ //画面の文字が一致していたら
    if (id == 'text_mac_practice'){ 
      $('#text_mac_practice').html('<h2 class="key">コピー</h2><h2>⌘ + C</h2>');
    } else if (id == 'text_mac_test'){
      $('#text_mac_test').html('<h2 class="key">コピー</h2>');
    }　
  }
}); 
    
$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'コピー'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'c' && event.metaKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h2 class="key">カット</h2><h2>⌘ + X</h2>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h2 class="key">カット</h2>');
      }
    }
  }
}); 