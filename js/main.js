console.log("JavaScriptを実行しています");


$("#btn1").on("click", function()  {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let message = `今日は${year}年${month}月${day}日です`
    // jQueryを使って画面にメッセージを表示する
    $("#tBox").val(message);
  });

  const btn = document.getElementById('#btn1');

  btn.addEventListener('click', function() {

          console.log('ボタンがクリックされました！');

  })


