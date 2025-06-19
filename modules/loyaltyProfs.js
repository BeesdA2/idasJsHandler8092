const { downloadLaatsteBestandLoyaltyProfs } = require("../../../../Productie/loyaltyProfs/js/consumeLoyaltyProfsSFTP.js");


 

async function consumeLoyaltyProfs  (req, res)  {
  
   
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



module.exports = {
  consumeLoyaltyProfs: consumeLoyaltyProfs
  };