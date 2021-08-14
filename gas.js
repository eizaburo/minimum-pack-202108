const doPost = (e) => {

    //値の受取り
    const email = e.parameter.email;
    const body = e.parameter.body;
    const channel = e.parameter.channel;

    //スプレッドシートの準備
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("シート1");

    //シートの一番下の行に追加
    sheet.appendRow([email, body, channel, new Date()]);

    //応答
    return ContentService.createTextOutput("受付けました。");
    
}