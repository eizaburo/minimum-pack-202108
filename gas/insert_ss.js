const doPost = (e) => {

    //値の受取り
    const email = e.parameter.email;
    const body = e.parameter.body;
    const channel = e.parameter.channel;
  
    //エラー処理
    const email_exp = /^[a-z0-9.]+@[a-z0-9.]+\.[a-z]+$/;
    const body_exp = /^.{1,10}$/;
    
    //問題があればエラーを返す（なければ処理を継続）
    if(!email_exp.test(email) || !body_exp.test(body)){
      return ContentService.createTextOutput("エラーです。");
    }
  
    //スプレッドシートの準備
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("シート1");
  
    //シートの一番下の行に追加
    sheet.appendRow([email, body, channel, new Date()]);
  
    //応答
    return ContentService.createTextOutput("受付けました。");
  }