const { downloadLaatsteBestandLoyaltyProfs } = require("../../../../Productie/loyaltyProfs/js/consumeLoyaltyProfsSFTP.js");
const { uploadTSVBestandLoyaltyProfs } = require("../../../../Productie/loyaltyProfs/js/consumeLoyaltyProfsSFTP.js");


 

async function consumeLoyaltyProfsDownload  (req, res)  {
  
   
  let host = req.query.host;
  let port = req.query.port;
  let username = req.query.username;
  let password = req.query.password; 
  
  
    
 var d = new Date();
 var datetime = d.toLocaleString(); 	
 console.log(datetime + ' consumeLoyaltyProfs host: ' +host + ' port: ' + port + ' username: ' +username );
 



  var resolveWebservice =  await downloadLaatsteBestandLoyaltyProfs(req, res);
   
  let responseResolveWebservice = await resolveWebservice;
  
  return responseResolveWebservice;
  
};

async function consumeLoyaltyProfsUpload  (req, res)  {
  
   
  let host = req.query.host;
  let port = req.query.port;
  let username = req.query.username;
  let password = req.query.password; 
  let sftpFileName = req.query.sftpFileName;
  
  console.log(sftpFileName);
  
    
 var d = new Date();
 var datetime = d.toLocaleString(); 	
 console.log(datetime + ' consumeLoyaltyProfs host: ' +host + ' port: ' + port + ' username: ' +username );
 



  var resolveWebservice =  await uploadTSVBestandLoyaltyProfs(req, res);
   
  let responseResolveWebservice = await resolveWebservice;
  
  return responseResolveWebservice;
  
};


module.exports = {
  consumeLoyaltyProfsDownload: consumeLoyaltyProfsDownload,
  consumeLoyaltyProfsUpload: consumeLoyaltyProfsUpload,
  };