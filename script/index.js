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
    //console.debug(`key:${ItemKeys[index]}, value:${inputValue}`);
    if (inputValue) {
      let queryParam = inputValue;
      if (ItemKeys[index] === 'MailBody') {
        let bodyWords;
        inputValue.split('\n').forEach(row => {
          //console.debug(`row:${row}`);
          if (bodyWords) {
            bodyWords += '%0D%0A';
            bodyWords += encodeURI(row);
          } else {
            bodyWords = encodeURI(row);
          }
        });
        //console.debug(`bodyWords:${bodyWords}`);
        queryParam = bodyWords;
      } else if (ItemKeys[index] === 'Title') {
        queryParam = encodeURI(inputValue);
      }
      url += `${QueryParamKeys[index]}${queryParam}`;
    }
  }
  return url;
}

// loadイベント
window.onload = function () {
  initialize();
};
