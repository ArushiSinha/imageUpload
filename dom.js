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
  image.setAttribute('onclick', "view(this)");
  span.setAttribute('id', object.img_name);
  canvas.setAttribute('id','canvas'); 
  console.log("hi");
  span.appendChild(image);
  listTag.appendChild(span);
  preview.appendChild(canvas);       
}
