/**
 * 初期表示処理
 */
function initialize() {

  if (debugflg) {
    console.log(itemkeys);
    console.log(loaddata);
  }

  for (const itemkey of itemkeys) {
    document.getElementById(itemkey).value = loaddata[itemkey];
  }
}

/**
 * Gメールの送信画面を起動する
 */
function createMail() {

  // URLを作成する
  var url = getURL();

  // 新しいタブで開く
  window.open(url);
}

/**
 * Gメール送信用URLを作成する
 * @return  url
 */
function getURL() {
  var url = "https://mail.google.com/mail/?view=cm&fs=1";
  // 宛先を含める
  var inputvalue = document.getElementById("address_to").value;
  if (inputvalue != "") {
    url += "&to=";
    url += inputvalue;
  }
  // CCを含める
  inputvalue = document.getElementById("address_cc").value;
  if (inputvalue != "") {
    url += "&cc=";
    url += inputvalue;
  }
  // BCCを含める
  inputvalue = document.getElementById("address_bcc").value;
  if (inputvalue != "") {
    url += "&bcc=";
    url += inputvalue;
  }
  // タイトルを含める
  inputvalue = document.getElementById("title").value;
  if (inputvalue != "") {
    url += "&su=";
    url += inputvalue;
  }
  // 本文を含める
  inputvalue = document.getElementById("mailbody").value;
  if (inputvalue != "") {
    url += "&body=";
    url += inputvalue;
  }
  return url;
}

// loadイベント
window.onload = function() {
  initialize();
};
