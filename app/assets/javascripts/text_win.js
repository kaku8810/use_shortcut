$(window).click(function(){
  var id = $('.main').attr('id'); 
  var key = $('.key').text()
  if (key == '画面をクリックしてスタート！'){
    if (id == 'text_win_practice'){ 
      $('#text_win_practice').html('<h1 class="key">コピー</h1><h1>Ctrl + c</h1>');
    } else if (id == 'text_win_test'){
      $('#text_win_test').html('<h1 class="key">コピー</h1>');
    }　
  }
}); 
    
$(window).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'コピー'){
    event.preventDefault();
    if (event.key == 'c' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
          $('#text_win_practice').html('<h1 class="key">カット</h1><h1>Ctrl + x</h1>');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">カット</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'カット'){
    event.preventDefault();
    if (event.key == 'x' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
          $('#text_win_practice').html('<h1 class="key">ペースト</h1><h1>Ctrl + p</h1>');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">ペースト</h1>');
      }
    }
  }
});

$(window).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'ペースト'){
    event.preventDefault();
    if (event.key == 'p' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
          $('#text_win_practice').html('<h1 class="key">全て選択</h1><h1>Ctrl + a</h1>');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">全て選択</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '全て選択'){
    event.preventDefault();
    if (event.key == 'a' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
          $('#text_win_practice').html('<h1 class="key">元に戻す(Undo)</h1><h1>Ctrl + z</h1>');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">元に戻す(Undo)</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '元に戻す(Undo)'){
    event.preventDefault();
    if (event.key == 'z' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
          $('#text_win_practice').html('<h1 class="key">再実行(Redo)</h1><h1>Ctrl + Shift + z</h1>');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">再実行(Redo)</h1>');
      }
    }
  }
});

$(window).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '再実行(Redo)'){
    event.preventDefault();
    if (event.key == 'z' && event.ctrlKey && event.shiftKey){
      if (id == 'text_win_practice'){ 
          $('#text_win_practice').html('<h1 class="key">行の先頭に移動</h1><h1>Home</h1>');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">行の先頭に移動</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行の先頭に移動'){
    event.preventDefault();
    if (event.key == 'Home'){
      if (id == 'text_win_practice'){ 
          $('#text_win_practice').html('<h1 class="key">行の末尾に移動</h1><h1>End</h1>');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">行の末尾に移動</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行の末尾に移動'){
    event.preventDefault();
    if (event.key == 'End'){
      if (id == 'text_win_practice'){ 
          $('#text_win_practice').html('<h1 class="key">単語の先頭に移動</h1><h1>Ctrl + ←</h1>');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">単語の先頭に移動</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '単語の先頭に移動'){
    event.preventDefault();
    if (event.key == 'ArrowLeft' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
          $('#text_win_practice').html('<h1 class="key">単語の末尾に移動</h1><h1>Ctrl + →</h1>');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">単語の末尾に移動</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '単語の末尾に移動'){
    event.preventDefault();
    if (event.key == 'ArrowRight' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
          $('#text_win_practice').html('<h1 class="key">全角カタカナに変換</h1><h1>Ctrl + i</h1>');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">全角カタカナに変換</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '全角カタカナに変換'){
    event.preventDefault();
    if (event.key == 'i' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
          $('#text_win_practice').html('<h1 class="key">半角カタカナに変換</h1><h1>Ctrl + o</h1>');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key">半角カタカナに変換</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '半角カタカナに変換'){
    event.preventDefault();
    if (event.key == 'o' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
          $('#text_win_practice').html('<h1 class="key lastkey">全角英数に変換</h1><h1>Ctrl + p</h1>');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1 class="key lastkey">全角英数に変換</h1>');
      }
    }
  }
}); 

$(window).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '全角英数に変換'){
    event.preventDefault();
    if (event.key == 'p' && event.ctrlKey){
      if (id == 'text_win_practice'){ 
          $('#text_win_practice').html('<h1>クリアしました！</h1>');
      } else if (id == 'text_win_test'){
        $('#text_win_test').html('<h1>クリアしました！</h1>');
      }
    }
  }
}); 