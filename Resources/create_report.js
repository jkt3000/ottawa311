// form and submits report

var create_report = Titanium.UI.createView({
  width:320,
  height:420,
  visible:false
});

var preview = Titanium.UI.createImageView({
  width: 150,
  height: 150,
  top: 150,
  image: report_photo
});

create_report.add(preview);

// listener when photo is taken
Titanium.App.addEventListener("photoChosen", function(e) {
  preview.image = report_photo;
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
	borderWidth:1,
	borderColor:'#aaa',
	borderRadius:5
});

descField.addEventListener('return', function() {
  descField.blur();
});



create_report.add(descLabel);
create_report.add(descField);

// blur all text fields
create_report.addEventListener('click', function(e) {
  descField.blur();
});



// 
// Submission handling
//

// var submitBtn = Titanium.UI.createButton({
//   title: 'submit Report'
// });
// submitBtn.addEventListener('click', function(e){
//   var xhr = Titanium.Network.createHTTPClient();
//   
//   xhr.onload = function() {
//     
//     Titanium.API.info('got post response');
//     Titanium.API.info('object '+this);
//   };
//   
//   xhr.open('POST', REMOTE_URL);
//   xhr.send({title: 'Test Post', description: 'this is a test post'});
// });
