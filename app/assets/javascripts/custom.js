$(window).click(function(){ //Windowがクリックされたら
  var id = $('.main').attr('id'); 
  var element = $('.start').text()
  if (element == '画面をクリックしてスタート！'){ //画面の文字が一致していたら
    if (id == 'text_mac_practice'){ 
      $('#text_mac_practice').html('<h1 class="key">コピー</h1><h1>⌘ + c</h1>');
    } else if (id == 'text_mac_test'){
      $('#text_mac_test').html('<h1 class="key">コピー</h1>');
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
          $('#text_mac_practice').html('<h1 class="key">カット</h1><h1>⌘ + x</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">カット</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'カット'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'x' && event.metaKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h1 class="key">ペースト</h1><h1>⌘ + p</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">ペースト</h1>');
      }
    }
  }
});

$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'ペースト'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'p' && event.metaKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h1 class="key">全て選択</h1><h1>⌘ + a</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">全て選択</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '全て選択'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'a' && event.metaKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h1 class="key">元に戻す(Undo)</h1><h1>⌘ + z</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">元に戻す(Undo)</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '元に戻す(Undo)'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'z' && event.metaKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h1 class="key">再実行(Redo)</h1><h1>⌘ + shift + z</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">再実行(Redo)</h1>');
      }
    }
  }
});

$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '再実行(Redo)'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'z' && event.metaKey && event.shiftKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h1 class="key">1文字進む</h1><h1>control + f</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">1文字進む</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '1文字進む'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'f' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h1 class="key">1文字戻る</h1><h1>control + b</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">1文字戻る</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '1文字戻る'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'b' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h1 class="key">1行上に移動</h1><h1>control + p</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">1行上に移動</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '1行上に移動'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'p' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h1 class="key">1行下に移動</h1><h1>control + n</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">1行下に移動</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '1行下に移動'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'n' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h1 class="key">行の末尾に移動</h1><h1>control + e</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">行の末尾に移動</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行の末尾に移動'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'e' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h1 class="key">行の先頭に移動</h1><h1>control + a</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">行の先頭に移動</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行の先頭に移動'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'a' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h1 class="key">カーソルの左側の文字を削除</h1><h1>control + h</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">カーソルの左側の文字を削除</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'カーソルの左側の文字を削除'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'h' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h1 class="key">カーソルの右側の文字を削除</h1><h1>control + d</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">カーソルの右側の文字を削除</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'カーソルの右側の文字を削除'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'd' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h1 class="key">カーソルから行末まで削除</h1><h1>control + k</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">カーソルから行末まで削除</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){ //キーが押されたら
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'カーソルから行末まで削除'){ //画面の文字と一致していたら
    event.preventDefault(); //ブラウザのショートカットを無効
    if (event.key == 'k' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
          $('#text_mac_practice').html('<h1>クリアしました！</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1>クリアしました！</h1>');
      }
    }
  }
}); 