const { handleConsumeWebservice } = require("../../../BandenExpress/js/consumeWebservice.js");
const { handleConsumeWebserviceApiWeb } = require("../../../BandenExpress/js/consumeWebserviceApiWeb.js");

async function consumeApiWeb  (req, res)  {
  
 
 
  let setletter = req.query.setletter;
  let guid      = req.query.guid;
  let applicatie = req.query.applicatie;
  let filiaal    = req.query.filiaal;
  
  var d = new Date();
  var datetime = d.toLocaleString(); 
   
  console.log(datetime + ' consumeBandenExpressApiWeb setletter:' +setletter + ' guid: ' + guid +' applicatie: ' + applicatie );
    
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleConsumeWebservice(setletter,  guid, applicatie);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

async function consumeWebserviceApiWeb  (req, res)  {
 
 
 
  let setletter = req.query.setletter;
  let guid      = req.query.guid;
  let applicatie = req.query.applicatie;
  let filiaal    = req.query.filiaal;
   
  var d = new Date();
  var datetime = d.toLocaleString(); 	
  console.log(datetime + ' consumeBandenExpressWebserviceApiWeb setletter: ' +setletter + ' guid: ' + guid +' applicatie: ' + applicatie );
    

 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var responseWebservice =  await handleConsumeWebserviceApiWeb(setletter, filiaal, guid, applicatie);
  let resolve = await responseWebservice; 
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  //console.log('net voor teruggeven resolve in consumeWebservice'); 
  return resolve;	
  
};

module.exports = {
  consumeApiWeb: consumeApiWeb,
  consumeWebserviceApiWeb: consumeWebserviceApiWeb
  };