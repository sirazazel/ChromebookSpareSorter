function doGet(e) {
  let list = HtmlService.createTemplateFromFile('list.html');
  let model = e.parameter['model'];
  let page = setModelPage(model);
 
  //generating the selector
  list.sheetNames = retrieveSheetNames();  
  list.model = model;

  //fetching available spares data
  if(model){
    list.sparePartsArray = retrieveSparePartsArray(page);
  }
  
  //getting final url
  list.url = getUrl();
  
  //generating page
  return list.evaluate()
}

function retrieveSheetNames(){
  const sheet = SpreadsheetApp.openById("14U26KKBYjWoZIkAU0_9mKojb77FxqVvx-55sKlSDRBQ");
  const pages = sheet.getSheets();
  let sheetNames = [];
  pages.forEach(function (sheet) {
    sheetNames.push(sheet.getName());
  });
  return sheetNames;  
}

function retrieveSparePartsArray(page){
  return data = page.getDataRange().getValues();
}

function setModelPage(model){
return page = SpreadsheetApp.openById("14U26KKBYjWoZIkAU0_9mKojb77FxqVvx-55sKlSDRBQ").getSheetByName(model);
}

function getUrl() {
  var url = ScriptApp.getService().getUrl();
  return url;
}
