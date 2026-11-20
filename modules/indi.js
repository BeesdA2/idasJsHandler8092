const { uploadINDIxml } = require("../../../../Productie/INDI/js/consumeSftpINDI.js");


async function consumeIndiUpload  (req, res)  {
  
   
  let host = req.query.host;
  let port = req.query.port;
  let username = req.query.username;
  let password = req.query.password; 
  let sftpFileName = req.query.sftpFileName;
  
  console.log(sftpFileName);
  
    
 var d = new Date();
 var datetime = d.toLocaleString(); 	
 console.log(datetime + ' consumeINDI host: ' +host + ' port: ' + port + ' username: ' +username );
 



  var resolveWebservice =  await uploadINDIxml(req, res);
   
  let responseResolveWebservice = await resolveWebservice;
  
  return responseResolveWebservice;
  
};


module.exports = {
   consumeIndiUpload: consumeIndiUpload,
  };