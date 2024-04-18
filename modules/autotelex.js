const { handleVehicleAutotelexpro } = require("../../../../Productie/AutotelexPRO/js/vehicleAutotelexpro.js");
const { handleAanvraagAutotelexpro } = require("../../../../Productie/AutotelexPRO/js/aanvraagAutotelexpro.js");
const { handleOpvragenAutotelexpro } = require("../../../../Productie/AutotelexPRO/js/opvragenAutotelexpro.js");
const { handleKentekenRaadpleging} = require("../../../../Productie/AutotelexPRO/js/KentekenRaadpleging.js");

async function consumeVehicleAutotelexpro  (req, res)  {
 
 
 
  let setletter = req.query.setletter;
  let idasuser  = req.query.idasuser;
  let applicatie = req.query.applicatie;
  let filiaal    = req.query.filiaal;
  let offerte    = req.query.offerte;
  let kenteken   = req.query.kenteken;
  let taxid      = req.query.taxid;
  let taxdatum   = req.query.taxdatum;
  let inruil     = req.query.inruil;
   
  
  var d = new Date();
  var datetime = d.toLocaleString(); 	
  console.log(datetime +' consumeVehicleAutotelexpro: ' + ' setletter: ' +setletter + ' idasuser: ' + idasuser + ' applicatie: ' +applicatie + ' filiaal: ' +filiaal+ ' offerte: '+ offerte  + ' kenteken: ' + kenteken + ' taxatie-id: ' +taxid + ' taxatie datum: ' + taxdatum + ' inruil: ' + inruil  );
  
                      
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleVehicleAutotelexpro(setletter, idasuser, applicatie, filiaal, offerte, kenteken, taxid, taxdatum, inruil);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

async function consumeAanvraagAutotelexpro  (req, res)  {
 
 
 
  let setletter  = req.query.setletter;
  let idasuser   = req.query.idasuser;
  let applicatie = req.query.applicatie;
  let filiaal    = req.query.filiaal;
  let offerte    = req.query.offerte;
  let kenteken   = req.query.kenteken;
  let kmstand    = req.query.kmstand;
  let klnr       = req.query.klnr;
   
  
  var d = new Date();
  var datetime = d.toLocaleString(); 	
  console.log(datetime +' consumeAanvraagAutotelexpro: ' + ' setletter: ' +setletter + ' idasuser: ' + idasuser + ' applicatie: ' +applicatie + ' filiaal: ' +filiaal+ ' offerte: '+ offerte  + ' kenteken: ' + kenteken + ' km stand: ' +kmstand + ' klantnummer: ' + klantnummer );
                   
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleAanvraagAutotelexpro(setletter, idasuser, applicatie, filiaal, offerte, kenteken, kmstand, klnr);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};



async function consumeOpvragenAutotelexpro  (req, res)  {
 
 
 
  let setletter  = req.query.setletter;
  let idasuser   = req.query.idasuser;
  let applicatie = req.query.applicatie;
  let filiaal    = req.query.filiaal;
  let offerte    = req.query.offerte;
  let ticketid   = req.query.ticketid; 
  let logging    = req.query.logging;  
   
  
  var d = new Date();
  var datetime = d.toLocaleString(); 	
  console.log(datetime +' onsumeOpvragenAutotelexpro: ' + ' setletter: ' +setletter + ' idasuser: ' + idasuser + ' applicatie: ' +applicatie + ' filiaal: ' +filiaal+ ' offerte: '+ offerte  + ' ticket-id: ' + ticketid + ' logging: ' +logging );
                       
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleOpvragenAutotelexpro(setletter, idasuser, applicatie, filiaal, offerte, ticketid, logging);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

async function consumeKentekenRaadpleging  (req, res)  {
  
 
 
  let setletter  = req.query.setletter;
  let idasuser   = req.query.idasuser;
  let applicatie = req.query.applicatie;
  let filiaal    = req.query.filiaal;
  let offerte    = req.query.offerte;
  let kenteken   = req.query.kenteken;
  let logging    = req.query.logging;  
   
  
  var d = new Date();
 var datetime = d.toLocaleString(); 	
 console.log(datetime +' consumeKentekenRaadpleging: ' + ' setletter: ' +setletter + ' idasuser: ' + idasuser + ' applicatie: ' +applicatie + ' filiaal: ' +filiaal+ ' offerte: '+ offerte  + ' ticket-id: ' + ticketid + ' logging: ' +logging );
                        
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleKentekenRaadpleging(setletter, idasuser, applicatie, filiaal, offerte, kenteken, logging);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};


module.exports = {
  consumeVehicleAutotelexpro : consumeVehicleAutotelexpro,
  consumeAanvraagAutotelexpro : consumeAanvraagAutotelexpro,
  consumeOpvragenAutotelexpro: consumeOpvragenAutotelexpro,
  consumeKentekenRaadpleging: consumeKentekenRaadpleging
  };