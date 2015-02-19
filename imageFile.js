var imageFile = function(){

  

  var handleFileSelect = function(evt){

  var files = evt.target.files; // FileList object
  evt.stopPropagation();
  evt.preventDefault();
  var output = {
    url:'', img_name:''
  };
  var files = evt.dataTransfer.files;
  for (var i = 0, f; f = files[i]; i++) 
  {
    var reader = new FileReader();
    reader.onload = (function(files) 
    {
      return function(e) 
      {
        output.url = e.target.result;
        output.img_name = escape(files.name);
        addImage(output);

      };
    })(f);

    reader.readAsDataURL(f);
  };

}

var handleDragOver = function(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy';
}

 return {
    handleFileSelect : handleFileSelect,
    handleDragOver : handleDragOver,
    
  }
  

}();





