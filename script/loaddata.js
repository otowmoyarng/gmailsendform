// id属性の配列
const itemkeys = [
    'address_to', 
    'address_cc', 
    'address_bcc', 
    'title', 
    'mailbody'
]

// 初期表示値
var loaddata = {
    // 宛先
    address_to : 'to@gmail.com',
    // ＣＣ
    address_cc : 'cc@gmail.com',
    // ＢＣＣ
    address_bcc : 'bcc1@gmail.com, bcc1@gmail.com',
    // 件名
    title : 'title',
    // 本文
    mailbody : 'body'
}

var debugflg = false;