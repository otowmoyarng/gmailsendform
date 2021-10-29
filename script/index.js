/**
 * 初期表示処理
 */
function initialize() {

  if (debugFlg) {
    console.debug(itemKeys);
    console.debug(LoadData);
  }

  for (const itemKey of itemKeys) {
    document.getElementById(itemKey).value = LoadData[itemKey];
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
  var inputValue = document.getElementById("AddressTo").value;
  if (inputValue != "") {
    url += "&to=";
    url += inputValue;
  }
  // CCを含める
  inputValue = document.getElementById("AddressCc").value;
  if (inputValue != "") {
    url += "&cc=";
    url += inputValue;
  }
  // BCCを含める
  inputValue = document.getElementById("AddressBcc").value;
  if (inputValue != "") {
    url += "&bcc=";
    url += inputValue;
  }
  // タイトルを含める
  inputValue = document.getElementById("Title").value;
  if (inputValue != "") {
    url += "&su=";
    url += inputValue;
  }
  // 本文を含める
  inputValue = document.getElementById("MailBody").value;
  if (inputValue != "") {
    url += "&body=";
    url += inputValue;
  }
  return url;
}

// loadイベント
window.onload = function () {
  initialize();
};
