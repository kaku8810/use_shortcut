$(document).on('click', '.btn', function(){
  var id = $('.main').attr('id'); 
  var key = $('.key').text()
  if (key == 'クリックしてスタート！'){
    if (id == 'vscode_win_practice'){ 
      $('#vscode_win_practice').html('<h1 class="key">行をコピー(未選択時)</h1><h1>Ctrl + c</h1><img src="assets/vscode/copy_line.gif">');
    } else if (id == 'vscode_win_test'){
      $('#vscode_win_test').html('<h1 class="key">行をコピー(未選択時)</h1><img src="assets/vscode/copy_line.gif">');
    }
  }
});

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行をコピー(未選択時)'){
    event.preventDefault();
    if (event.key == 'c' && event.ctrlKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1 class="key">行をカット(未選択時)</h1><h1>Ctrl + x</h1><img src="assets/vscode/cut_line.gif">');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1 class="key">行をカット(未選択時)</h1><img src="assets/vscode/cut_line.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行をカット(未選択時)'){
    event.preventDefault();
    if (event.key == 'x' && event.ctrlKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1 class="key">行にインデントを追加</h1><h1>Ctrl + ]</h1><img src="assets/vscode/add_indent.gif">');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1 class="key">行にインデントを追加</h1><img src="assets/vscode/add_indent.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行にインデントを追加'){
    event.preventDefault();
    if (event.key == ']' && event.ctrlKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1 class="key">行のインデントを削除</h1><h1>Ctrl + [</h1><img src="assets/vscode/del_inedent.gif">');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1 class="key">行のインデントを削除</h1><img src="assets/vscode/del_indent.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行のインデントを削除'){
    event.preventDefault();
    if (event.key == '[' && event.ctrlKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1 class="key">下に行を追加</h1><h1>Ctrl + Enter</h1><img src="assets/vscode/under_line.gif">');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1 class="key">下に行を追加</h1><img src="assets/vscode/under_line.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '下に行を追加'){
    event.preventDefault();
    if (event.key == 'Enter' && event.ctrlKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1 class="key">上に行を追加</h1><h1>Ctrl + shift + Enter</h1><img src="assets/vscode/above_line.gif">');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1 class="key">上に行を追加</h1><img src="assets/vscode/above_line.gif">');
      }
    }
  }
});

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '上に行を追加'){
    event.preventDefault();
    if (event.key == 'Enter' && event.ctrlKey && event.shiftKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1 class="key">現在の行を削除</h1><h1>Ctrl + shift + k</h1><img src="assets/vscode/cut_line.gif">');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1 class="key">現在の行を削除</h1><img src="assets/vscode/cut_line.gif">');
      }
    }
  }
});

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '現在の行を削除'){
    event.preventDefault();
    if (event.key == 'K' && event.ctrlKey && event.shiftKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1 class="key">現在の行を選択</h1><h1>Ctrl + l</h1><img src="assets/vscode/select_line.gif">');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1 class="key">現在の行を選択</h1><img src="assets/vscode/select_line.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '現在の行を選択'){
    event.preventDefault();
    if (event.key == 'l' && event.ctrlKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1 class="key">エディタ内を検索</h1><h1>Ctrl + f</h1><img src="assets/vscode/search.gif">');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1 class="key">エディタ内を検索</h1><img src="assets/vscode/search.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'エディタ内を検索'){
    event.preventDefault();
    if (event.key == 'f' && event.ctrlKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1 class="key">エディタ内を置換</h1><h1>Ctrl + h</h1><img src="assets/vscode/substitution.gif">');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1 class="key">エディタ内を置換</h1><img src="assets/vscode/substitution.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'エディタ内を置換'){
    event.preventDefault();
    if (event.key == 'h' && event.ctrlKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1 class="key">フォルダ/ワークスペース全体を検索</h1><h1>Ctrl + shift + f</h1><img src="assets/vscode/whole_search.gif">');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1 class="key">フォルダ/ワークスペース全体を検索</h1><img src="assets/vscode/whole_search.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'フォルダ/ワークスペース全体を検索'){
    event.preventDefault();
    if (event.key == 'F' && event.ctrlKey && event.shiftKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1 class="key">フォルダ/ワークスペース全体を置換</h1><h1>Ctrl + shift + h</h1><img src="assets/vscode/whole_substitution.gif">');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1 class="key">フォルダ/ワークスペース全体を置換</h1><img src="assets/vscode/whole_substitution.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'フォルダ/ワークスペース全体を置換'){
    event.preventDefault();
    if (event.key == 'H' && event.ctrlKey && event.shiftKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1 class="key">ファイルを名前で検索</h1><h1>Ctrl + p</h1><img src="assets/vscode/file_search.gif">');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1 class="key">ファイルを名前で検索</h1><img src="assets/vscode/file_search.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'ファイルを名前で検索'){
    event.preventDefault();
    if (event.key == 'p' && event.ctrlKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1 class="key">ファイルを開く</h1><h1>Ctrl + o</h1><img src="assets/vscode/open.gif">');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1 class="key">ファイルを開く</h1><img src="assets/vscode/open.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'ファイルを開く'){
    event.preventDefault();
    if (event.key == 'o' && event.ctrlKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1 class="key lastkey">ファイルを保存</h1><h1>Ctrl + s</h1><img src="assets/vscode/save.gif">');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1 class="key lastkey">ファイルを保存</h1><img src="assets/vscode/save.gif">');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'ファイルを保存'){
    event.preventDefault();
    if (event.key == 's' && event.ctrlKey){
      if (id == 'vscode_win_practice'){ 
        $('#vscode_win_practice').html('<h1>クリアしました！</h1>');
      } else if (id == 'vscode_win_test'){
        $('#vscode_win_test').html('<h1>クリアしました！</h1>');
        $('.save-time').show();
      }
    }
  }
}); 

/*
行をコピー(未選択時) 
行をカット(未選択時)
行にインデントを追加
行のインデントを削除
下に行を追加
上に行を追加
現在の行を削除
現在の行を選択
エディタ内を検索
エディタ内を置換
フォルダ/ワークスペース全体を検索
フォルダ/ワークスペース全体を置換
ファイルを名前で検索
ファイルを開く
ファイルを保存
*/
