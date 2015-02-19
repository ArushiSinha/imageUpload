var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', imageFile.handleDragOver, false);
dropZone.addEventListener('drop', imageFile.handleFileSelect, false);
console.log("Hi");


function addImage(object)
{
  console.log(object.url);
  console.log(object.img_name);
  var listTag = document.getElementById('list');
  var preview = document.getElementById('preview');
  var image = document.createElement('img')
  var span = document.createElement('span'); 
  var canvas = document.createElement('canvas');
  image.setAttribute('src', object.url);
  image.setAttribute('title', object.img_name);
  image.setAttribute('id', object.img_name);
  image.setAttribute('onclick', "viewImage(this)");
  canvas.setAttribute('id', object.img_name+"c"); 
  canvas.setAttribute('class', 'canvasClass')
  console.log(object.img_name+"c");
  span.appendChild(image);
  listTag.appendChild(span);
  preview.appendChild(canvas);       
}

function viewImage(obj)
{

  var x = document.getElementsByTagName("canvas");
  var i;
  for (i = 0; i < x.length; i++) 
  {
      x[i].style.display = "none";
  }
  var preview = document.getElementById('preview');
  preview.style.visibility='visible';
  var canvas = document.getElementById(obj.title+"c");
  canvas.style.display='block';
  console.log(obj.title);   
  x = document.getElementById(obj.title).src;
  canvas.style.backgroundImage="url('"+x+"')";
  var saveButton = document.getElementById('save');
  saveButton.setAttribute('onclick', "saveFile.generateURL('"+x+"' , '"+obj.title+"')") ;
}


