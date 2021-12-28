$(document).on('click', '.btn', function(){
  var id = $('.main').attr('id'); 
  var key = $('.key').text()
  if (key == 'クリックしてスタート！'){
    if (id == 'text_mac_practice'){ 
      $('#text_mac_practice').html('<h1 class="key">コピー</h1><h1>⌘ + c</h1><img src="assets/text/copy.gif">');
    } else if (id == 'text_mac_test'){
      $('#text_mac_test').html('<h1 class="key">コピー</h1><img src="assets/text/copy.gif">');
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'コピー'){
    event.preventDefault();
    if (event.key == 'c' && event.metaKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1 class="key">カット</h1><h1>⌘ + x</h1><img src="assets/text/cut.gif">');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">カット</h1><img src="assets/text/cut.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'カット'){
    event.preventDefault();
    if (event.key == 'x' && event.metaKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1 class="key">ペースト</h1><h1>⌘ + p</h1><img src="assets/text/paste.gif">');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">ペースト</h1><img src="assets/text/paste.gif">');
      }
    }
  }
});

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'ペースト'){
    event.preventDefault();
    if (event.key == 'p' && event.metaKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1 class="key">全て選択</h1><h1>⌘ + a</h1><img src="assets/text/all_select.gif">');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">全て選択</h1><img src="assets/text/all_select.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '全て選択'){
    event.preventDefault();
    if (event.key == 'a' && event.metaKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1 class="key">元に戻す(Undo)</h1><h1>⌘ + z</h1><img src="assets/text/undo.gif">');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">元に戻す(Undo)</h1><img src="assets/text/undo.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '元に戻す(Undo)'){
    event.preventDefault();
    if (event.key == 'z' && event.metaKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1 class="key">再実行(Redo)</h1><h1>⌘ + shift + z</h1><img src="assets/text/redo.gif">');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">再実行(Redo)</h1><img src="assets/text/redo.gif">');
      }
    }
  }
});

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '再実行(Redo)'){
    event.preventDefault();
    if (event.key == 'z' && event.metaKey && event.shiftKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1 class="key">1文字進む</h1><h1>control + f</h1><img src="assets/text/forword.gif">');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">1文字進む</h1><img src="assets/text/forword.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '1文字進む'){
    event.preventDefault();
    if (event.key == 'f' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1 class="key">1文字戻る</h1><h1>control + b</h1><img src="assets/text/back.gif">');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">1文字戻る</h1><img src="assets/text/back.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '1文字戻る'){
    event.preventDefault();
    if (event.key == 'b' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1 class="key">1行上に移動</h1><h1>control + p</h1><img src="assets/text/up.gif">');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">1行上に移動</h1><img src="assets/text/up.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '1行上に移動'){
    event.preventDefault();
    if (event.key == 'p' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1 class="key">1行下に移動</h1><h1>control + n</h1><img src="assets/text/down.gif">');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">1行下に移動</h1><img src="assets/text/down.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '1行下に移動'){
    event.preventDefault();
    if (event.key == 'n' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1 class="key">行の末尾に移動</h1><h1>control + e</h1><img src="assets/text/end.gif">');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">行の末尾に移動</h1><img src="assets/text/end.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行の末尾に移動'){
    event.preventDefault();
    if (event.key == 'e' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1 class="key">行の先頭に移動</h1><h1>control + a</h1><img src="assets/text/begin.gif">');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">行の先頭に移動</h1><img src="assets/text/begin.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行の先頭に移動'){
    event.preventDefault();
    if (event.key == 'a' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1 class="key">カーソルの左側の文字を削除</h1><h1>control + h</h1><img src="assets/text/backspace.gif">');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">カーソルの左側の文字を削除</h1><img src="assets/text/backspace.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'カーソルの左側の文字を削除'){
    event.preventDefault();
    if (event.key == 'h' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1 class="key">カーソルの右側の文字を削除</h1><h1>control + d</h1><img src="assets/text/delete.gif">');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key">カーソルの右側の文字を削除</h1><img src="assets/text/delete.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'カーソルの右側の文字を削除'){
    event.preventDefault();
    if (event.key == 'd' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1 class="key lastkey">カーソルから行末まで削除</h1><h1>control + k</h1><img src="assets/text/kill.gif">');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1 class="key lastkey">カーソルから行末まで削除</h1><img src="assets/text/kill.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'カーソルから行末まで削除'){
    event.preventDefault();
    if (event.key == 'k' && event.ctrlKey){
      if (id == 'text_mac_practice'){ 
        $('#text_mac_practice').html('<h1>クリアしました！</h1>');
      } else if (id == 'text_mac_test'){
        $('#text_mac_test').html('<h1>クリアしました！</h1>');
        $('.save-time').show();
      }
    }
  }
}); 