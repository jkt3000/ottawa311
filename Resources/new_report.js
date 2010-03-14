// new report view - first screen

var new_report = Titanium.UI.createView({
  top:60,
  width:320,
  height:420,
  opacity:1
});

var cameraBtn = Titanium.UI.createButton({
	height: 30,
	width: 200,
	top:43,
	title: 'Take a photo >'
});

new_report.add(cameraBtn);

// temp button
var galleryBtn = Titanium.UI.createButton({
	height: 30,
	width: 200,
	top:73,
	title: 'Select photo from gallery >'
});

new_report.add(galleryBtn);

// handler when image is taken
function handleImageEvent(event) {
  report_photo = event.media;
  report_thumb = event.thumbnail;
  Titanium.App.fireEvent("photoChosen");
  createReport();
}


galleryBtn.addEventListener("click", function(e) {
  Titanium.Media.openPhotoGallery({
  	success:function(event) {
  	  handleImageEvent(event);
  	},
  	cancel:function() {},
  	error:function(error){
  	  var a = Titanium.UI.createAlertDialog({ 
  	    title:'Uh Oh...',
  	    message: 'We had a problem reading from your photo gallery - please try again'
  	  });
  		a.show();
  	},
  	allowImageEditing:true
  });
});


cameraBtn.addEventListener("click", function(e) {
  Titanium.Media.showCamera({
  	success:function(event) {
  	  handleImageEvent(event);
  	},
  	cancel:function() {},
  	error:function(error) {
  		var a = Titanium.UI.createAlertDialog({ title:'Uh Oh...'});
  		if (error.code == Titanium.Media.NO_CAMERA) {
  			a.setMessage('Sorry, this device does not have a camera - you knew that, right?');
  		}
  		else {
  			a.setMessage('Unexpected error: ' + error.code);
  		}
  		a.show();
  	},
  	allowImageEditing:true
  });
});