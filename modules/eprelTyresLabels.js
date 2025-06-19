const { generatePDF } = require("../../../../Productie/eprelTyresLabels/js/printEprelTyreLabel.js");


 

async function consumeEprelTyresLabels  (req, res)  {
  
  let setletter = req.query.setletter; 
  let filiaal = req.query.filiaal;
  let ordernummer = req.query.ordernummer;
  let orderregel = req.query.orderregel;
  let orderseqn = req.query.orderseqn; 
  let orderprtn = req.query.orderprtn; 
  let eprelLabelID = req.query.eprelLabelID;   
  let eprelURL     = req.query.eprelURL;
    
 var d = new Date();
 var datetime = d.toLocaleString(); 	
 console.log(datetime + ' consumeEprelTyresLabels ordernummer: ' +ordernummer  + ' eprelURL: ' + eprelURL  );
 



  var resolveWebservice =  await generatePDF(req, res);
   
  let responseResolveWebservice = await resolveWebservice;
  
  return responseResolveWebservice;
  
};



module.exports = {
  consumeEprelTyresLabels: consumeEprelTyresLabels
  };
  
   