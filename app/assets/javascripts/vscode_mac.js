$(document).on('click', '.btn', function(){
  var id = $('.main').attr('id'); 
  var key = $('.key').text()
  if (key == 'クリックしてスタート！'){
    if (id == 'vscode_mac_practice'){ 
      $('#vscode_mac_practice').html('<h1 class="key">行をコピー(未選択時)</h1><h1>⌘ + c</h1>');
    } else if (id == 'vscode_mac_test'){
      $('#vscode_mac_test').html('<h1 class="key">行をコピー(未選択時)</h1>');
    }　
  }
});

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行をコピー(未選択時)'){
    event.preventDefault();
    if (event.key == 'c' && event.metaKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1 class="key">行をカット(未選択時)</h1><h1>⌘ + x</h1>');
      } else if (id == 'vscode_mac_test'){
        $('#vscode_mac_test').html('<h1 class="key">行をカット(未選択時)</h1>');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行をカット(未選択時)'){
    event.preventDefault();
    if (event.key == 'x' && event.metaKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1 class="key">行にインデントを追加</h1><h1>⌘ + ]</h1>');
      } else if (id == 'vscode_mac_test'){
        $('#vscode_mac_test').html('<h1 class="key">行にインデントを追加</h1>');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行にインデントを追加'){
    event.preventDefault();
    if (event.key == ']' && event.metaKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1 class="key">行のインデントを削除</h1><h1>⌘ + [</h1>');
      } else if (id == 'vscode_mac_test'){
        $('#vscode_mac_test').html('<h1 class="key">行のインデントを削除</h1>');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '行のインデントを削除'){
    event.preventDefault();
    if (event.key == '[' && event.metaKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1 class="key">下に行を追加</h1><h1>⌘ + Enter</h1>');
      } else if (id == 'vscode_mac_test'){
        $('#vscode_mac_test').html('<h1 class="key">下に行を追加</h1>');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '下に行を追加'){
    event.preventDefault();
    if (event.key == 'Enter' && event.metaKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1 class="key">上に行を追加</h1><h1>⌘ + shift + Enter</h1>');
      } else if (id == 'vscode_mac_test'){
        $('#vscode_mac_test').html('<h1 class="key">上に行を追加</h1>');
      }
    }
  }
});

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '上に行を追加'){
    event.preventDefault();
    if (event.key == 'Enter' && event.metaKey && event.shiftKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1 class="key">現在の行を削除</h1><h1>⌘ + shift + k</h1>');
      } else if (id == 'vscode_mac_test'){
        $('#vscode_mac_test').html('<h1 class="key">現在の行を削除</h1>');
      }
    }
  }
});

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '現在の行を削除'){
    event.preventDefault();
    if (event.key == 'k' && event.metaKey && event.shiftKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1 class="key">現在の行を選択</h1><h1>⌘ + l</h1>');
      } else if (id == 'vscode_mac_test'){
        $('#vscode_mac_test').html('<h1 class="key">現在の行を選択</h1>');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == '現在の行を選択'){
    event.preventDefault();
    if (event.key == 'l' && event.metaKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1 class="key">エディタ内を検索</h1><h1>⌘ + f</h1>');
      } else if (id == 'vscode_mac_test'){
        $('#vscode_mac_test').html('<h1 class="key">エディタ内を検索</h1>');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'エディタ内を検索'){
    event.preventDefault();
    if (event.key == 'f' && event.metaKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1 class="key">エディタ内を置換</h1><h1>⌘ + ⌥ + f</h1>');
      } else if (id == 'vscode_mac_test'){
        $('#vscode_mac_test').html('<h1 class="key">エディタ内を置換</h1>');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'エディタ内を置換'){
    event.preventDefault();
    if (event.key == 'ƒ' && event.metaKey　&& event.altKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1 class="key">フォルダ/ワークスペース全体を検索</h1><h1>⌘ + shift + f</h1>');
      } else if (id == 'vscode_mac_test'){
        $('#vscode_mac_test').html('<h1 class="key">フォルダ/ワークスペース全体を検索</h1>');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'フォルダ/ワークスペース全体を検索'){
    event.preventDefault();
    if (event.key == 'f' && event.metaKey && event.shiftKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1 class="key">フォルダ/ワークスペース全体を置換</h1><h1>⌘ + shift + h</h1>');
      } else if (id == 'vscode_mac_test'){
        $('#vscode_mac_test').html('<h1 class="key">フォルダ/ワークスペース全体を置換</h1>');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'フォルダ/ワークスペース全体を置換'){
    event.preventDefault();
    if (event.key == 'h' && event.metaKey && event.shiftKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1 class="key">ファイルを名前で検索</h1><h1>⌘ + p</h1>');
      } else if (id == 'vscode_mac_test'){
        $('#vscode_mac_test').html('<h1 class="key">ファイルを名前で検索</h1>');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'ファイルを名前で検索'){
    event.preventDefault();
    if (event.key == 'p' && event.metaKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1 class="key">ファイルを開く</h1><h1>⌘ + o</h1>');
      } else if (id == 'vscode_mac_test'){
        $('#vscode_mac_test').html('<h1 class="key">ファイルを開く</h1>');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'ファイルを開く'){
    event.preventDefault();
    if (event.key == 'o' && event.metaKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1 class="key lastkey">ファイルを保存</h1><h1>⌘ + s</h1>');
      } else if (id == 'vscode_mac_test'){
        $('#vscode_mac_test').html('<h1 class="key lastkey"></h1>');
      }
    }
  }
}); 

$(document).keydown(function(event){
  var id = $('.main').attr('id'); 
  var key = $('.key').text();
  if (key == 'ファイルを保存'){
    event.preventDefault();
    if (event.key == 's' && event.metaKey){
      if (id == 'vscode_mac_practice'){ 
        $('#vscode_mac_practice').html('<h1>クリアしました！</h1>');
      } else if (id == 'text_mac_test'){
        $('#vscode_mac_test').html('<h1>クリアしました！</h1>');
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
