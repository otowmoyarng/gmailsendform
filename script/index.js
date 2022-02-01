// id属性の配列
const ItemKeys = [
  'AddressTo',
  'AddressCc',
  'AddressBcc',
  'Title',
  'MailBody'
]

// id属性の配列
const QueryParamKeys = [
  '&to=',
  '&cc=',
  '&bcc=',
  '&su=',
  '&body='
]

/**
 * 初期表示処理
 */
function initialize() {

  console.debug("LoadData", LoadData);

  ItemKeys.forEach(key => {
    if (LoadData[key]) {
      document.getElementById(key).value = LoadData[key];
    }
  });
}

/**
 * Gメールの送信画面を起動する
 */
function createMail() {

  // URLを作成する
  const url = getURL();

  // 新しいタブで開く
  window.open(url);

  // 現在のウィンドウを閉じる
  //window.open('about:blank', '_self').close();
}

/**
 * Gメール送信用URLを作成する
 * @return  url
 */
function getURL() {

  let url = "https://mail.google.com/mail/?view=cm&fs=1";

  for (let index = 0; index < ItemKeys.length; index++) {
    let inputValue = document.getElementById(ItemKeys[index]).value;
    if (inputValue) {
      url += `${QueryParamKeys[index]}${inputValue}`;
    }
  }
  return url;
}

// loadイベント
window.onload = function () {
  initialize();
};
