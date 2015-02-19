

var imageFile = {};

imageFile.handleFileSelect = function(evt){

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

imageFile.handleDragOver = function(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'copy';
}


imageFile.fierEvent = function(){
 var dropZone = document.getElementById('drop_zone');

function

}

var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', imageFile.handleDragOver, false);
dropZone.addEventListener('drop', imageFile.handleFileSelect, false);




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
