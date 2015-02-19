var saveFile = function(){

  var generateURL =function(src){

    filepicker.setKey("AJyjszryUSGGEsDo5ntvqz");
    console.log("src "+src ); 
    var input = src;
    console.log("File inp"+input);

    filepicker.store(
      input,
      {base64decode: true},
      function(Blob){
        console.log("Store successful:" + JSON.stringify(Blob));
        console.log(Blob.url);

        return Blob.url;
      },
      function(FPError) {
        console.log(FPError.toString());
      },
      function(progress) {
        console.log("Loading: "+progress+"%");
      }
      );
  }

  return {
    generateURL : generateURL,
    
    
  }



}();


