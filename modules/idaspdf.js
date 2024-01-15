const { handleConsumeWebservicePDF } = require("../../../../Productie/iDASPDF/js/consumeWebservice.js");


 

async function consumeiDASPDF  (req, res)  {
  
  let setletter = req.query.setletter;
  console.log('setletter: ' + setletter);
  let pdfGUID   = req.query.pdfGUID;
  console.log('pdfGUID: ' +pdfGUID);
   
  
  
    




  var resolveWebservice =  await handleConsumeWebservicePDF(setletter, pdfGUID);
   
  let responseResolveWebservice = await resolveWebservice;
  
  return responseResolveWebservice;
  
};



module.exports = {
  consumeiDASPDF: consumeiDASPDF
  };