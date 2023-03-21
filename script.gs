function doGet(e) {
  let list = HtmlService.createTemplateFromFile('list.html');
  let model = e.parameter['model'];
  let page = setModelPage(model);
  
  list.model = model;
  
  //generating the selector
  list.sheetNames = retrieveSheetNames();  

  //populating table
  if(model){
    list.sparePartsArray = retrieveSparePartsArray(page);
  }
  
  //getting onSubmit url
  list.url = getUrl();
  
  //creating html
  return list.evaluate()
}

function searchModel(){
// not implemented

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

// gets the url of the generated page.
function getUrl() {
  var url = ScriptApp.getService().getUrl();
  return url;
}
