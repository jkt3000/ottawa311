Titanium.API.info('building report views');

var new_report = Titanium.UI.createView({
  size: {width: 320, height: 600 }
});

var cameraBtn = Titanium.UI.createButton({
 height: 30,
 width: 220,
 top:40,
 title: 'Take a photo >'
});

var galleryBtn = Titanium.UI.createButton({
 height: 30,
 width: 220,
 top:80,
 title: 'Select photo from gallery >'
});


// handler when image is taken
function handleImageEvent(event) {
  Titanium.App.report_photo = event.media;
  Titanium.App.report_thumb = event.thumbnail;
  Titanium.App.fireEvent("photoChosen");
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

new_report.add(cameraBtn);
new_report.add(galleryBtn);

Titanium.UI.currentWindow.add(new_report);


//
// createReport window
//
var create_report = Titanium.UI.createWindow({
  title: 'Submit Report'
});

var scrollview = Titanium.UI.createScrollView({
  contentWidth:320,
	contentHeight:'auto',
	top:0,
	showVerticalScrollIndicator:true
});

var preview = Titanium.UI.createImageView({
  width: 150,
  height: 150,
  top: 150,
  image: Titanium.App.report_photo
});


// listener when photo is taken
Titanium.App.addEventListener("photoChosen", function(e) {
  Titanium.API.debug("got photoChosen event");
  preview.image = Titanium.App.report_photo;
  Titanium.UI.currentTab.open(create_report,{animated:true});
});

var descLabel = Titanium.UI.createLabel({
  text: 'Describe the issue (optional):',
  textAlign:'left',
  font:{
    fontSize:14,
    fontFamily:'Arial'
  },
  height:'auto',
  width:'auto',
  color:'#666',
  top:10,
  left: 10
});

var descField = Titanium.UI.createTextArea({
  height:70,
	width:300,
	top:30,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
	borderWidth: 1,
	borderColor: '#aaa'
});

descField.addEventListener('return', function() {
  descField.blur();
});

//
// category selection
//
var categoryField = Titanium.UI.createButton({
	height:35,
	width:300,
	top: 110,
  title: 'Select Category'
});


var categoryPicker = Titanium.UI.createPicker({
  bottom: 0,
  visible: false
});
var data = [
  Titanium.UI.createPickerRow({title: 'Graffiti', custom_item: "5"}),
  Titanium.UI.createPickerRow({title: 'Graffiti on Private Property', custom_item: "6"}),
  Titanium.UI.createPickerRow({title: 'Garbage', custom_item: "2"}),
  Titanium.UI.createPickerRow({title: 'Broken Equipment/Play Structure', custom_item: "1"}),
  Titanium.UI.createPickerRow({title: 'Lights broken in Park', custom_item: "3"}),
  Titanium.UI.createPickerRow({title: 'Pothole', custom_item: "9"}),
  Titanium.UI.createPickerRow({title: 'Bus Shelter', custom_item: "15"})
];
categoryPicker.add(data);
categoryPicker.selectionIndicator = true;

categoryField.addEventListener('click', function(){
  Titanium.API.info('got category field');
  categoryPicker.show();
  
});

categoryPicker.addEventListener('change', function(e){
  categoryField.title = e.row.title;
  Titanium.App.report_category = e.row.custom_item;
  categoryPicker.hide();
  Titanium.API.info("report_category is now "+Titanium.App.report_category);
  Titanium.App.fireEvent("categoryChosen");
});

//
// Submit button
//
var submitBtn = Titanium.UI.createButton({
  height:35,
	width:300,
	top: 310,
	enabled: false,
	opacity: 0.5,
  title: 'Submit Report'
});

submitBtn.addEventListener('categoryChosen', function(e){
  // enable createButton
  submitBtn.enabled = true;
  submitBtn.opacity = 1;
});

scrollview.add(descLabel);
scrollview.add(descField);
scrollview.add(categoryField);
scrollview.add(preview);
scrollview.add(submitBtn);
create_report.add(scrollview);
create_report.add(categoryPicker);

// blur all text fields
scrollview.addEventListener('click', function(e) {
  descField.blur();
});



