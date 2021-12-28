$(document).on('click', '.btn', function(){
  var id = $('.main').attr('id'); 
  var key = $('.key').text()
  if (key == 'クリックしてスタート！'){
    if (id == 'text_win_practice'){ 
      $('#text_win_practice').html('<h1 class="key">コピー</h1><h1>Ctrl + c</h1><img src="assets/text/copy.gif">');
    } else if (id == 'text_win_test'){
      $('#text_win_test').html('<h1 class="key">コピー</h1><img src="assets/text/copy.gif">');
    }
  }
}); 
    
$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'コピー'){
    event.preventDefault();
    if (event.key == 'c' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
        $('#text_win_practice').html('<h1 class="key">カット</h1><h1>Ctrl + x</h1><img src="assets/text/cut.gif">');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">カット</h1><img src="assets/text/cut.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'カット'){
    event.preventDefault();
    if (event.key == 'x' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
        $('#text_win_practice').html('<h1 class="key">ペースト</h1><h1>Ctrl + p</h1><img src="assets/text/paste.gif">');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">ペースト</h1><img src="assets/text/paste.gif">');
      }
    }
  }
});

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'ペースト'){
    event.preventDefault();
    if (event.key == 'p' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
        $('#text_win_practice').html('<h1 class="key">全て選択</h1><h1>Ctrl + a</h1><img src="assets/text/all_select.gif">');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">全て選択</h1><img src="assets/text/all_select.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '全て選択'){
    event.preventDefault();
    if (event.key == 'a' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
        $('#text_win_practice').html('<h1 class="key">元に戻す(Undo)</h1><h1>Ctrl + z</h1><img src="assets/text/undo.gif">');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">元に戻す(Undo)</h1><img src="assets/text/undo.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '元に戻す(Undo)'){
    event.preventDefault();
    if (event.key == 'z' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
        $('#text_win_practice').html('<h1 class="key">再実行(Redo)</h1><h1>Ctrl + Shift + z</h1><img src="assets/text/redo.gif">');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">再実行(Redo)</h1><img src="assets/text/redo.gif">');
      }
    }
  }
});

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '再実行(Redo)'){
    event.preventDefault();
    if (event.key == 'Z' && event.ctrlKey && event.shiftKey){
      if (id == 'text_win_practice'){ 
        $('#text_win_practice').html('<h1 class="key">行の先頭に移動</h1><h1>Home</h1><img src="assets/text/begin.gif">');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">行の先頭に移動</h1><img src="assets/text/begin.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行の先頭に移動'){
    event.preventDefault();
    if (event.key == 'Home'){
      if (id == 'text_win_practice'){ 
        $('#text_win_practice').html('<h1 class="key">行の末尾に移動</h1><h1>End</h1><img src="assets/text/end.gif">');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">行の末尾に移動</h1><img src="assets/text/end.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行の末尾に移動'){
    event.preventDefault();
    if (event.key == 'End'){
      if (id == 'text_win_practice'){ 
        $('#text_win_practice').html('<h1 class="key">単語の先頭に移動</h1><h1>Ctrl + ←</h1><img src="assets/text/pre_word.gif">');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">単語の先頭に移動</h1><img src="assets/text/pre_word.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '単語の先頭に移動'){
    event.preventDefault();
    if (event.key == 'ArrowLeft' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
        $('#text_win_practice').html('<h1 class="key">単語の末尾に移動</h1><h1>Ctrl + →</h1><img src="assets/text/next_word.gif">');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">単語の末尾に移動</h1><img src="assets/text/next_word.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '単語の末尾に移動'){
    event.preventDefault();
    if (event.key == 'ArrowRight' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
        $('#text_win_practice').html('<h1 class="key">全角カタカナに変換</h1><h1>Ctrl + i</h1><img src="assets/text/zen_kata.gif">');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">全角カタカナに変換</h1><img src="assets/text/zen_kata.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '全角カタカナに変換'){
    event.preventDefault();
    if (event.key == 'i' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
        $('#text_win_practice').html('<h1 class="key">半角カタカナに変換</h1><h1>Ctrl + o</h1><img src="assets/text/han_kata.gif">');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">半角カタカナに変換</h1><img src="assets/text/han_kata.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '半角カタカナに変換'){
    event.preventDefault();
    if (event.key == 'o' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
        $('#text_win_practice').html('<h1 class="key lastkey">全角英数に変換</h1><h1>Ctrl + p</h1><img src="assets/text/zen_ei.gif">');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key lastkey">全角英数に変換</h1><img src="assets/text/zen_ei.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '全角英数に変換'){
    event.preventDefault();
    if (event.key == 'p' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
        $('#text_win_practice').html('<h1>クリアしました！</h1>');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1>クリアしました！</h1>');
        $('.save-time').show();
      }
    }
  }
}); 